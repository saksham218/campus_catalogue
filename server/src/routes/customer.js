const express = require('express');

const { getBasicInfo, getCart, getFavShops, updateBasicInfo, addFavoriteShop, getShopMenu, getAllShop,getShop } = require('../controllers/customer.js');
const { customerMiddleware } = require('../middlewares/customer.js');
const router = express.Router();

//TODO: add customer middleware

router.get('/basic_info', customerMiddleware, getBasicInfo);

router.get('/cart', customerMiddleware, getCart);

router.get('/fav_shops', customerMiddleware, getFavShops);

router.get('/all_shops', customerMiddleware, getAllShop);

router.get('/shop/:id', customerMiddleware, getShop)

router.get('/shop_menu/:shopId', customerMiddleware, getShopMenu);

router.post('/fav_shops', customerMiddleware, addFavoriteShop);

router.patch('/update_info', customerMiddleware, updateBasicInfo);

module.exports = router;
