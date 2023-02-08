const Item = require('../models/item');

export const getItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        console.log(item);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addItem = async (req, res) => {
    const item = req.body;
    item.shop = req.shop._id;

    const newItem = new Item(item);

    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateItem = async (req, res) => {
    const { id } = req.params;
    const item = req.body;
    if (item.shop !== req.shop._id)
        return res.status(401).send('This item does not belong to your shop');

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No item with that id');

    const updatedItem = await Item.findByIdAndUpdate(_id, item, { new: true });
    res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
    const { id } = req.params;
    const item = Item.findById(id);

    if (!item || !mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No item with that id');

    if (item.shop !== req.shop._id)
        return res.status(401).send('This item does not belong to your shop');

    await item.delete();
    res.json({ message: 'Item deleted successfully' });
}

