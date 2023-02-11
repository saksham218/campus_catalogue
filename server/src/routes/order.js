const express = require('express');

const { getOrder, updateOrderCustomer, placeOrder, updateOrderShop, addOrder, deleteOrder, deliverOrder } = require('../controllers/order');
const { customerMiddleware } = require('../middlewares/customer');
const { shopMiddleware } = require('../middlewares/shop');

const router = express.Router();

//add customer middleware
router.get('/customer/:id', customerMiddleware, getOrder);

//add shop middleware
router.get('/shop/:id', shopMiddleware, getOrder);

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

//shop middleware
router.patch('/deliver/:id', shopMiddleware, deliverOrder);


module.exports = router;