const express = require('express');

const { getItem, addItem, updateItem, deleteItem } = require('../controllers/item');
const { shopMiddleware } = require('../middlewares/shop');
const router = express.Router();

router.get('/:id', getItem);
//TODO: add shop middleware to post, patch, delete
router.post('/', shopMiddleware, addItem);
router.patch('/:id', shopMiddleware, updateItem);
router.delete('/:id', shopMiddleware, deleteItem);

module.exports = router;
