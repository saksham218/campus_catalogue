const express = require('express');

const {
    getOrderShop,
    getOrderCustomer,
    updateOrderCustomer,
    placeOrder,
    updateOrderShop,
    addOrder,
    deleteOrder,
    deliverOrder,
    cancelOrder,
    readyOrder,
    createPrintOrder,
    addPrintOrder,
    getFile,
    downloadFile,
    acknowledgeOrder
} = require('../controllers/order');
const { customerMiddleware } = require('../middlewares/customer');
const { shopMiddleware } = require('../middlewares/shop');

const router = express.Router();

//add customer middleware
router.get('/customer/:id', customerMiddleware, getOrderCustomer);

//add shop middleware
router.get('/shop/:id', shopMiddleware, getOrderShop);

//add customer middleware
router.patch('/customer/:id', customerMiddleware, updateOrderCustomer);

//add shop middleware
router.patch('/shop/:id', shopMiddleware, updateOrderShop);

//customer middleware
router.post('/', customerMiddleware, addOrder);

//customer middleware
router.delete('/:id', customerMiddleware, deleteOrder);

//customer middleware
router.patch('/place/:id', customerMiddleware, placeOrder);

// customer middleware
router.post('/acknowledge/:id', customerMiddleware, acknowledgeOrder);

//shop middleware
router.patch('/deliver/:id', shopMiddleware, deliverOrder);

//shop middleware
router.patch('/ready/:id', shopMiddleware, readyOrder);

//customer middleware
router.patch('/cancel/:id', customerMiddleware, cancelOrder);

// customer middleware
router.post('/print', customerMiddleware, createPrintOrder);

// customer middleware
router.post('/print/:id', customerMiddleware, addPrintOrder);

// shop middleware
router.get('/print/:id/:index', shopMiddleware, getFile);

// shop middleware
router.get('/print/:id/:index/download', shopMiddleware, downloadFile);

module.exports = router;
