const Item = require('../models/item');
const mongoose = require('mongoose');
const { debug } = require('../utilities/logging');

const getItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        console.log(item);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addItem = async (req, res) => {
    const { name, image, price, category } = req.body;
    const newItem = new Item({
        name,
        shop: req.shop._id,
        image,
        price: price * 100,
        category
    });
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, image, price, category, available } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No item with that id');

    const item = await Item.findById(id);
    if (!item) return res.status(404).send('No item with that id');
    if (item.shop.toString() !== req.shop._id.toString()) return res.status(401).send('This item does not belong to your shop');

    item.name = name || item.name;
    item.image = image || item.image;
    item.price = price * 100 || item.price;
    item.category = category || item.category;
    item.available = available || item.available;

    await item.save();
    res.status(201).json(item);
};

const deleteItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No item with that id');

    const item = await Item.findById(id);
    if (!item) return res.status(404).send('No item with that id');
    if (item.shop.toString() !== req.shop._id.toString()) return res.status(401).send('This item does not belong to your shop');

    await item.delete();
    res.status(204).json({ message: 'Item deleted successfully' });
};

module.exports = { getItem, addItem, updateItem, deleteItem };
