import express from 'express';

import { getOrder, updateOrderCustomer, updateOrderShop, addOrder, deleteOrder } from '..controllers/order';

const router = express.Router();

//TODO: add customer and shop middleware
router.get('/:id', getOrder);

//TODO: add customer middleware
router.patch('/customer/:id', updateOrderCustomer);

//TODO: add shop middleware
router.patch('/shop/:id', updateOrderShop);

//TODO: customer middleware
router.post('/', addOrder);

//TODO: customer middleware
router.delete('/:id', deleteOrder);



export default router;