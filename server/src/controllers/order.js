const Order = require('../models/order');

export const getOrder = async (req, res) => {
    const { id } = req.params.id
    try {
        const order = await Order.findById(id);
        console.log(order);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addOrder = async (req, res) => {
    const order = req.body;

    const newOrder = new Order(order);

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};

export const updateOrderCustomer = async (req, res) => {
    const { id } = req.params;
    const order = req.body;
    if (order.customer !== req.customer.id)
        return res.status(401).send('This order does not belong to you');

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No order with that id');

    const updatedOrder = await Order.findByIdAndUpdate(id, item, { new: true });
    res.json(updatedOrder);
};

export const updateOrderShop = async (req, res) => {
    const { id } = req.params;
    const order = req.body;
    if (order.shop !== req.shop.id)
        return res.status(401).send('This order does not belong to your shop');

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No order with that id');

    const updatedOrder = await Order.findByIdAndUpdate(id, item, { new: true });
    res.json(updatedOrder);
};

export const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const order = Order.findById(id);

    if (!order || !mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No order with that id');

    if (order.customer !== req.customer.id)
        return res.status(401).send('This order does not belong to you');

    await order.delete();
    res.json({ message: 'Order deleted successfully' });
};





