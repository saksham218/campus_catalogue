import express from 'express';

import { getBasicInfo, getCart, getFavShops, updateCustomer, addCustomer } from '../controllers/custromer.js';
const router = express.Router();

router.get('/auth/microsoft',
    passport.authenticate('microsoft', {

    }),
    (req, res) => {
        //The request will be redirected to microsoft, so this
        //function will not be called.

    });

//TODO: add customer middleware
router.post('/customer/new_customer', addCustomer);

router.get('/customer/basic_info', getBasicInfo);

router.get('/customer/cart', getCart);

router.get('/customer/fav_shops', getFavShops);

router.patch('customer/update_info', updateCustomer);

export default router;