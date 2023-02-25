const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
var cron = require('node-cron');
const config = require('./src/config/config');
const Logging = require('./src/utilities/logging');
const router = express();
const passport = require('passport');
const session = require('express-session');
const strategies = require('./src/config/passport');
const { customerMiddleware } = require('./src/middlewares/customer');
const Order = require('./src/models/order');
const { deleteOrderFolder } = require('./src/utilities/order');
const shoptoken = require('./src/utilities/shoptoken');
const usertoken = require('./src/utilities/customertoken');

/** Connect to Mongo */
mongoose
    .set('strictQuery', true)
    .connect(config.MONGODB_URI, {})
    .then(() => {
        Logging.success('Mongo connected successfully.');
        StartServer();
    })
    .catch((error) => Logging.error(error));

/** Only Start Server if Mongoose Connects */
const StartServer = () => {
    /** Log the request */
    router.use((req, res, next) => {
        /** Log the req */
        // Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        Logging.info(`Incomming - [${req.method}] - [${req.url}]`);

        res.on('finish', () => {
            /** Log the res */
            // Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
            Logging.info(`Result : [${req.method}][${req.url}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());
    router.use(cors());
    router.use(fileUpload());
    router.use(
        session({
            secret: 'hehe',
            resave: false,
            saveUninitialized: true
        })
    );
    router.use(passport.initialize());
    router.use(passport.session());
    passport.use(strategies.googleStrategy);
    passport.use(strategies.microsoftStrategy);

    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    router.use('/admin', require('./src/routes/admin')); // tested
    router.use('/auth', require('./src/routes/auth')); // tested
    router.use('/customer', require('./src/routes/customer')); // tested
    router.use('/item', require('./src/routes/item')); // tested
    router.use('/order', require('./src/routes/order')); //tested
    router.use('/shop', require('./src/routes/shop')); // tested
    router.use('/timing', require('./src/routes/timing'));
    router.use('/user', require('./src/routes/user'));

    /** Healthcheck */
    router.get('/', (req, res) => {
        console.log(req.user);
        res.status(200).json({ hello: 'world' });
    });

    /** Cron Jobs to delete orders every day at 6am */
    cron.schedule(
        '0 6 * * *',
        async () => {
            const orders = await Order.find({ type: 'Print', status: { $in: ['Rejected', 'Cancelled', 'Delivered'] } });
            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                deleteOrderFolder(order);
            }
            Logging.debug('Cron Job ran successfully');
        },
        {
            scheduled: true,
            timezone: 'Asia/Kolkata'
        }
    );

    const httpServer = http.createServer(router);
    const io = require('socket.io')(httpServer, {
        cors: {
            origin: '*'
        }
    });
    io.on('connection', (socket) => {
        Logging.info('Socket connected');
        socket.on('disconnect', () => {
            Logging.info('Socket disconnected');
        });
    });
    const userIO = io.of('/wuser');
    const shopIO = io.of('/wshop');

    var customers = {};
    var shops = {};

    userIO.on('connection', async (socket) => {
        const token = socket.handshake.headers.authorization;
        if (token) {
            const data = await usertoken.verifyToken(token);
            if (data.valid) {
                socket.customer = data.customer;
            } else {
                socket.disconnect();
            }
        } else {
            socket.disconnect();
        }
        customers[socket.customer._id] = socket;
        socket.on('disconnect', () => {
            delete customers[socket.customer._id];
        });
        socket.on('order', async (data) => {
            const { order_id } = data;
            if (!order_id || !mongoose.Types.ObjectId.isValid(order_id)) {
                socket.emit('error', 'Invalid order id');
                return;
            }
            const order = await Order.findById(order_id).populate('items');
            if (!order) {
                socket.emit('error', 'Order not found');
                return;
            }
            if (order.customer.toString() !== socket.customer._id.toString()) {
                socket.emit('error', 'Its not your order');
                return;
            }
            if (order.status !== 'Pending') {
                socket.emit('error', 'Order already accepted or rejected or unplaced');
                return;
            }
            if (shops[order.shop]) {
                shops[order.shop].emit('order', order);
                socket.emit('success', 'Order sent successfully');
                return;
            }
            socket.emit('error', 'Shop not connected');
        });
    });

    shopIO.on('connection', async (socket) => {
        const token = socket.handshake.headers.authorization;
        if (token) {
            const data = await shoptoken.verifyToken(token);
            if (data.valid) {
                socket.shop = data.shop;
            } else {
                socket.disconnect();
            }
        } else {
            socket.disconnect();
        }
        shops[socket.shop._id] = socket;
        socket.on('disconnect', () => {
            delete shops[socket.shop._id];
        });
    });

    httpServer.listen(config.PORT, () => {
        Logging.verbose(`Server is running on port ${config.PORT}`);
    });
};
