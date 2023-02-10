const Customer = require('../models/customer');
const Order = require('../models/order');

//TODO: modify addCustomer according to outlook response
const addCustomer = async (req, res) => {

    const customer = req.body;

    const newCustomer = new Customer(customer);

    try {
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

const getBasicInfo = async (req, res) => {
    const { _id } = req.customer;

    try {

        const customer = await Customer.findById(_id);
        console.log(customer);
        res.status(200).json(customer.basic_info);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getFavShops = async (req, res) => {
    const { _id } = req.customer;
    try {

        const customer = await Customer.findById(_id);
        console.log(customer);
        res.status(200).json(customer.fav_shops);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCart = async (req, res) => {
    const { _id } = req.customer;
    try {
        cust_orders = Order.find({ customer: _id, status: 'Unplaced' });
        res.status(200).json({ data: cust_orders });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateCustomer = async (req, res) => {
    const { _id } = req.customer;
    const customer = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No customer with that id');

    const updatedCustomer = await Customer.findByIdAndUpdate(id, item, { new: true });
    res.json(updatedItem);

}

module.exports = {addCustomer, getBasicInfo, getCart, getFavShops, updateCustomer}