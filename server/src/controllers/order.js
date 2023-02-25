const Order = require('../models/order');
const Item = require('../models/item');
const mongoose = require('mongoose');
const { createOrder, refundPayment, verifyPayment } = require('../utilities/razorpay');
const path = require('path');
const fs = require('fs');
const pdf = require('pdf-page-counter');
const { deleteOrderFolder } = require('../utilities/order');
const getOrderShop = async (req, res) => {
    const { id } = req.params;
    try {
        const orderFromDB = await Order.findById(id);
        if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');
        if (orderFromDB.shop.toString() !== req.shop.id.toString()) return res.status(401).send('This order does not belong to you');
        res.status(200).json(orderFromDB);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getOrderCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const orderFromDB = await Order.findById(id);
        if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');
        if (orderFromDB.customer.toString() !== req.customer.id.toString()) return res.status(401).send('This order does not belong to you');

        res.status(200).json(orderFromDB);
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
        if (item.shop.toString() !== order.shop.toString()) return res.status(401).json({ message: 'This item does not belong to your shop' });
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

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.customer.toString() !== req.customer.id.toString()) return res.status(401).send('This order does not belong to you');

    if (orderFromDB.status === 'Unplaced') {
        orderFromDB.items = items;

        var total = 0;
        for (let i = 0; i < items.length; i++) {
            const item = await Item.findById(items[i].item);
            if (!item) return res.status(404).json({ message: 'Item not found' });
            if (item.shop.toString() !== orderFromDB.shop.toString()) return res.status(401).json({ message: 'This item does not belong to your shop' });
            total += item.price * items[i].quantity;
        }
        orderFromDB.total = total;

        await orderFromDB.save();
        return res.json(orderFromDB);
    }

    res.status(401).send('You can update only unplaced orders');
};

const placeOrder = async (req, res) => {
    const { id } = req.params;
    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.customer.toString() !== req.customer.id.toString()) return res.status(401).send('This order does not belong to you');

    if (orderFromDB.status === 'Unplaced') {
        const data = await createOrder(orderFromDB.total, 'INR', orderFromDB.num, 1);
        if (!data.status) return res.status(409).json({ message: data.error.message });
        orderFromDB.payment.razorpay_order_id = data.data.id;
        await orderFromDB.save();
        return res.json(orderFromDB);
    }

    res.status(401).send('You can only place unplaced orders');
};

const acknowledgeOrder = async (req, res) => {
    const { id } = req.params;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.customer.toString() !== req.customer.id.toString()) return res.status(401).send('This order does not belong to you');

    if (orderFromDB.status === 'Unplaced') {
        const data = await verifyPayment(razorpay_order_id, razorpay_payment_id, razorpay_signature);
        if (!data.status) return res.status(409).json({ message: data.error.message });
        if (orderFromDB.payment.razorpay_order_id !== razorpay_order_id) return res.status(409).json({ message: 'Order id does not match' });
        orderFromDB.status = 'Pending';
        orderFromDB.payment.razorpay_payment_id = razorpay_payment_id;
        orderFromDB.payment.razorpay_signature = razorpay_signature;
        await orderFromDB.save();
        return res.json(orderFromDB);
    }

    res.status(401).send('You can only acknowledge unplaced orders');
};

const cancelOrder = async (req, res) => {
    const { id } = req.params;
    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.customer.toString() !== req.customer.id.toString()) return res.status(401).send('This order does not belong to you');

    if (orderFromDB.status === 'Pending') {
        //refund money
        const refund = await refundPayment(orderFromDB.payment.razorpay_payment_id, orderFromDB.total, orderFromDB.num);
        if (!refund.status) return res.status(409).json({ message: refund.error.message });
        // on success of refund cancel order
        orderFromDB.status = 'Cancelled';
        orderFromDB.payment.refund = refund.data;
        await orderFromDB.save();
        return res.status(200).json(orderFromDB);
    }

    res.status(400).json({ message: 'You can only cancel the orders which are not approved by shopkeeper' });
};

const updateOrderShop = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.shop.toString() !== req.shop.id.toString()) return res.status(401).send('This order does not belong to your shop');

    if (orderFromDB.status === 'Unplaced') return res.status(401).send('You can only update placed orders');
    if (orderFromDB.status === 'Cancelled') return res.status(401).send('You can only update uncancelled orders');
    if (orderFromDB.status === 'Delivered') return res.status(401).send('You can only update undelivered orders');
    if (orderFromDB.status === 'Pending' && status === 'Rejected') {
        //refund money
        const refund = await refundPayment(orderFromDB.payment.razorpay_payment_id, orderFromDB.total, orderFromDB.num);
        if (!refund.status) return res.status(409).json({ message: refund.error.message });
        // on success of refund cancel order
        orderFromDB.status = status;
        orderFromDB.payment.refund = refund.data;
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

const readyOrder = async (req, res) => {
    const { id } = req.params;
    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.shop.toString() !== req.shop.id.toString()) return res.status(401).send('This order does not belong to your shop');

    if (orderFromDB.status === 'Accepted') {
        orderFromDB.status = 'Ready';
        await orderFromDB.save();
        return res.json(orderFromDB);
    }
    res.status(401).send('Ready only Accepted orders');
};

const deliverOrder = async (req, res) => {
    const { id } = req.params;
    const { otp } = req.body;
    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.shop.toString() !== req.shop.id.toString()) return res.status(401).send('This order does not belong to your shop');

    if (orderFromDB.status === 'Ready' && orderFromDB.otp === otp) {
        orderFromDB.status = 'Delivered';
        await orderFromDB.save();

        return res.status(201).json(orderFromDB);
    }
    res.status(401).send('Incorrect OTP');
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const orderFromDB = await Order.findById(id);

    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.customer.toString() !== req.customer.id.toString()) return res.status(401).send('This order does not belong to you');

    if (orderFromDB.status === 'Unplaced') {
        if (orderFromDB.type === 'Print') {
            deleteOrderFolder(orderFromDB);
        }
        await orderFromDB.delete();
        return res.json({ message: 'Order deleted successfully' });
    }

    res.status(401).send('You can only delete unplaced orders');
};

const createPrintOrder = async (req, res) => {
    const { shop } = req.body;
    var customer = req.customer;
    const num = 'ord_' + Date.now().toString();
    var total = 0;
    const newOrder = new Order({
        num,
        type: 'Print',
        shop: shop,
        customer: customer.id,
        total
    });
    newOrder
        .save()
        .then((order) => {
            fs.mkdir(path.join(__dirname, '../..', 'uploads', order._id.toString()), (err) => {
                if (err) {
                    return res.status(409).json({ message: err.message });
                }
                res.status(201).json(order);
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(409).json({ message: err.message });
        });
};

const addPrintOrder = async (req, res) => {
    const { id } = req.params;
    var { layout, color, paper, copies } = req.body;
    color = color === '1' ? true : false;
    copies = parseInt(copies);
    const order = await Order.findById(id);

    if (!order || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (order.customer.toString() !== req.customer._id.toString()) return res.status(401).send('This order does not belong to you');

    if (order.status !== 'Unplaced') return res.status(401).send('You can only add items to unplaced orders');

    let file;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    file = req.files.file;
    uploadPath = path.join(__dirname, '../..', 'uploads', id, file.name);
    console.log(uploadPath);

    // Use the mv() method to place the file somewhere on your server
    file.mv(uploadPath, async function (err) {
        if (err) return res.status(500).send(err);
        order.print.push({ layout, color, paper, copies, path: uploadPath, mimetype: file.mimetype });
        const colorP = await Item.findOne({ shop: order.shop, category: 'Color_Print' });
        const bnwP = await Item.findOne({ shop: order.shop, category: 'Print' });
        const cp = colorP ? colorP.price : 5;
        const bp = bnwP ? bnwP.price : 2;
        const buff = fs.readFileSync(uploadPath);
        var numpages = 1;
        if (file.mimetype === 'application/pdf') {
            numpages = (await pdf(buff)).numpages;
        }
        if (color) {
            order.total += cp * copies * numpages;
        } else {
            order.total += bp * copies * numpages;
        }
        await order.save();
        res.json({ message: 'File uploaded successfully', order });
    });
};

const getFile = async (req, res) => {
    const { id, index } = req.params;

    const orderFromDB = await Order.findById(id);
    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.shop.toString() !== req.shop._id.toString()) return res.status(401).send('This order does not belong to your shop');
    const print = orderFromDB.print[index];
    const data = fs.readFileSync(print.path);
    res.contentType(print.mimetype);
    res.send(data);
};

const downloadFile = async (req, res) => {
    const { id, index } = req.params;

    const orderFromDB = await Order.findById(id);
    if (!orderFromDB || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');

    if (orderFromDB.shop.toString() !== req.shop._id.toString()) return res.status(401).send('This order does not belong to your shop');
    const print = orderFromDB.print[index];
    res.download(print.path);
};

module.exports = {
    getOrderShop,
    getOrderCustomer,
    updateOrderCustomer,
    updateOrderShop,
    addOrder,
    deleteOrder,
    placeOrder,
    deliverOrder,
    cancelOrder,
    readyOrder,
    createPrintOrder,
    addPrintOrder,
    getFile,
    downloadFile,
    acknowledgeOrder
};
