import express from 'express';

import {getOrder, getShop, getUser, getItems} from '..controllers/order';

const router = express.Router();

router.post('/order/getOrder', getOrder);

router.get('/order/getShop', getShop);

router.get('/order/getUser', getUser);

router.get('/order/getItems', getItems);

export default router;