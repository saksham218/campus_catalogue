const express = require('express');

const { getBasicInfo, getCart, getFavShops, updateCustomer, addCustomer } = require('../controllers/customer.js');
const router = express.Router();

//TODO: add customer middleware
router.post('/new_customer', addCustomer);

router.get('/basic_info', getBasicInfo);

router.get('/cart', getCart);

router.get('/fav_shops', getFavShops);

router.patch('/update_info', updateCustomer);

module.exports = router;