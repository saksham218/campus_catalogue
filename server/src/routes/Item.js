import express from 'express'

import { getItem, addItem, updateItem, deleteItem } from '../controllers/item'
const router = express.Router();

router.get('/:id', getItem);
//TODO: add shop middleware to post, patch, delete
router.post('/:id', addItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;