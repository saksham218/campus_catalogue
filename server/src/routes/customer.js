const express = require('express');

const { getBasicInfo, getCart, getFavShops, updateBasicInfo, updateFavShops, addCustomer } = require('../controllers/customer.js');
const { customerMiddleware } = require('../middlewares/customer.js');
const router = express.Router();

//TODO: add customer middleware

router.get('/basic_info', customerMiddleware, getBasicInfo);

router.get('/cart', customerMiddleware, getCart);

router.get('/fav_shops', customerMiddleware, getFavShops);

router.patch('/update_info', customerMiddleware, updateBasicInfo);

router.patch('/fav_shops', customerMiddleware, updateFavShops);

module.exports = router;