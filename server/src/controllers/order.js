const Order = require('../models/order');
const { createOrder, refundPayment } = require('../utilities/razorpay');

const getOrder = async (req, res) => {
    const { id } = req.params.id;
    try {
        const order = await Order.findById(id);
        console.log(order);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//TODO: see what we get in req.body
// req.body: type, shop, items, print
const addOrder = async (req, res) => {
    const order = req.body;
    var customer = req.customer;
    const num = 'ord_' + Date.now().toString();
    var total = 0;
    for (let i = 0; i < order.items.length; i++) {
        const item = await Item.findById(order.items[i]);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        if (item.shop !== order.shop) return res.status(401).json({ message: 'This item does not belong to your shop' });
        total += item.price;
    }

    const newOrder = new Order({
        num,
        type: order.type,
        shop: order.shop,
        customer: customer.id,
        total,
        items: order.items
    });

    try {
        await newOrder.save();
        res.status(201).json({ newOrder });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateOrderCustomer = async (req, res) => {
    const { id } = req.params;
    const { items } = req.body;
    const orderFromDB = await Order.findById(id);

    if (orderFromDB.customer !== req.customer.id) return res.status(401).send('This order does not belong to you');

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (order.status === 'unplaced') {
        orderFromDB.items = items;
        await orderFromDB.save();
        return res.json(updatedOrder);
    }

    res.status(401).send('You can update only unplaced orders');
};

const placeOrder = async (req, res) => {
    const { id } = req.params;
    const orderFromDB = await Order.findById(id);
    if (orderFromDB.customer !== req.customer.id) return res.status(401).send('This order does not belong to you');

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.status === 'unplaced') {
        const data = await createOrder(orderFromDB.total, 'INR', orderFromDB.num, 1);
        if (!data.status) return res.status(409).json({ message: data.error.message });
        orderFromDB.payment.razorpay_order_id = data.data.id;
        orderFromDB.status = 'pending';
        await orderFromDB.save();
        return res.json(orderFromDB);
    }

    res.status(401).send('You can only place unplaced orders');
};

const cancelOrder = async (req, res) => {
    const { id } = req.params;
    const orderFromDB = await Order.findById(id);
    if (orderFromDB.customer !== req.customer.id) return res.status(401).send('This order does not belong to you');

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.status === 'pending') {
        //refund money
        const refund = await refundPayment(orderFromDB.payment.razorpay_payment_id, orderFromDB.total, orderFromDB.num);
        if (!refund.status) return res.status(409).json({ message: refund.error.message });
        // on success of refund cancel order
        orderFromDB.status = 'Cancelled';
        orderFromDB.payment.refund = data.data;
        await orderFromDB.save();
        return res.status(200).json(orderFromDB);
    }

    res.status(400).json({ message: 'You can only cancel the orders which are not approved by shopkeeper' });
};

const updateOrderShop = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const orderFromDB = await Order.findById(id);
    if (orderFromDB.shop !== req.shop.id) return res.status(401).send('This order does not belong to your shop');

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.status === 'Unplaced') return res.status(401).send('You can only update placed orders');
    if (orderFromDB.status === 'Cancelled') return res.status(401).send('You can only update uncancelled orders');
    if (orderFromDB.status === 'Delivered') return res.status(401).send('You can only update undelivered orders');
    if (orderFromDB.status === 'Pending' && status === 'Rejected') {
        //refund money
        const refund = await refundPayment(orderFromDB.payment.razorpay_payment_id, orderFromDB.total, orderFromDB.num);
        if (!refund.status) return res.status(409).json({ message: refund.error.message });
        // on success of refund cancel order
        orderFromDB.status = status;
        orderFromDB.payment.refund = data.data;
        await orderFromDB.save();
        return res.status(200).json(orderFromDB);
    }
    if (orderFromDB.status === 'Pending' && status === 'Accepted') {
        orderFromDB.status = status;
        // generate otp for order
        const otp = Math.floor(100000 + Math.random() * 900000);
        orderFromDB.otp = otp;
        await orderFromDB.save();
        // update due_amount of shop
        req.shop.razorpay.due_amount += orderFromDB.total;
        await req.shop.save();
        return res.json(orderFromDB);
    }
    if (orderFromDB.status === 'Accepted' && status === 'Ready') {
        orderFromDB.status = status;
        await orderFromDB.save();
        return res.json(orderFromDB);
    }
    res.status(401).send('You can only update orders in the following order: Pending -> Accepted -> Ready -> Delivered');
};

const deliverOrder = async (req, res) => {
    const { id } = req.params;
    const { otp } = req.body;
    const orderFromDB = await Order.findById(id);
    if (orderFromDB.shop !== req.shop.id) return res.status(401).send('This order does not belong to your shop');

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.status === 'Ready' && orderFromDB.otp === otp) {
        orderFromDB.status = 'Delivered';
        await orderFromDB.save();
        res.json(orderFromDB);
    }
    res.status(401).send('Incorrect OTP');
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const order = Order.findById(id);

    if (!order || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (order.customer !== req.customer.id) return res.status(401).send('This order does not belong to you');

    if (order.status === 'unplaced') {
        await order.delete();
        return res.json({ message: 'Order deleted successfully' });
    }

    res.status(401).send('You can only delete unplaced orders');
};

module.exports = { getOrder, updateOrderCustomer, updateOrderShop, addOrder, deleteOrder, placeOrder, deliverOrder, cancelOrder };
