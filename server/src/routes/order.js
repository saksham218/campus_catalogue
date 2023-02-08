import express from 'express';

import { getOrder, updateOrderCustomer, updateOrderShop, addOrder, deleteOrder } from '..controllers/order';

const router = express.Router();

//TODO: add customer and shop middleware
router.get('/order/:id', getOrder);

//TODO: add customer middleware
router.patch('/order/customer/:id', updateOrderCustomer);

//TODO: add shop middleware
router.patch('/order/shop/:id', updateOrderShop);

//TODO: customer middleware
router.post('/order', addOrder);

//TODO: customer middleware
router.delete('/order/:id', deleteOrder);



export default router;