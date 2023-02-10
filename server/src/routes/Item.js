const express = require('express')

const { getItem, addItem, updateItem, deleteItem } = require('../controllers/item')
const router = express.Router();

router.get('/:id', getItem);
//TODO: add shop middleware to post, patch, delete
router.post('/:id', addItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;