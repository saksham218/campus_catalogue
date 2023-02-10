const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./src/config/config');
const Logging = require('./src/utilities/logging');
const router = express();
const passport = require('passport');
const session = require('express-session');
const strategies = require('./src/config/passport');

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
    router.use('/admin', require('./src/routes/admin'));
    router.use('/shop', require('./src/routes/shop'));
    router.use('/auth', require('./src/routes/auth'));
    // router.use('/trip', authMiddleware, tripRouter);

    /** Healthcheck */
    router.get('/ping', (req, res) => res.status(200).json({ hello: 'world' }));

    http.createServer(router).listen(config.PORT, () => {
        Logging.verbose(`Server is running on port ${config.PORT}`);
    });
};
