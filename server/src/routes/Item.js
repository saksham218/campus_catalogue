import express from 'express'

import { getItem, addItem, updateItem, deleteItem } from '../controllers/item'
const router = express.Router();

router.get('/item/:id', getItem);
//TODO: add shop middleware to post, patch, delete
router.post('/item/:id', addItem);
router.patch('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;