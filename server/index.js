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
        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
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
    // router.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    //     if (req.method == 'OPTIONS') {
    //         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    //         return res.status(200).json({});
    //     }

    //     next();
    // });

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
    router.get('/ping', customerMiddleware, (req, res) => {
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

    http.createServer(router).listen(config.PORT, () => {
        Logging.verbose(`Server is running on port ${config.PORT}`);
    });
};
