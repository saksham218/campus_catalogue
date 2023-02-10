const express = require('express');

const { getOrder, updateOrderCustomer, updateOrderShop, addOrder, deleteOrder } = require('../controllers/order');
const { customerMiddleware } = require('../middlewares/customer');
const { shopMiddleware } = require('../middlewares/shop');

const router = express.Router();

//TODO: add customer middleware
router.get('/customer/:id', customerMiddleware, getOrder);

//TODO: add shop middleware
router.get('/shop/:id', shopMiddleware, getOrder);

//TODO: add customer middleware
router.patch('/customer/:id', customerMiddleware, updateOrderCustomer);

//TODO: add shop middleware
router.patch('/shop/:id', shopMiddleware, updateOrderShop);

//TODO: customer middleware
router.post('/', customerMiddleware, addOrder);

//TODO: customer middleware
router.delete('/:id', customerMiddleware, deleteOrder);


module.exports = router;