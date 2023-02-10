import express from 'express';

import { getBasicInfo, getCart, getFavShops, updateCustomer, addCustomer } from '../controllers/custromer.js';
const router = express.Router();

//TODO: add customer middleware
router.post('/new_customer', addCustomer);

router.get('/basic_info', getBasicInfo);

router.get('/cart', getCart);

router.get('/fav_shops', getFavShops);

router.patch('/update_info', updateCustomer);

export default router;