const Customer = require('../models/customer');
const Order = require('../models/order');

const getBasicInfo = async (req, res) => {
    const { id } = req.params;
    try {

        const customer = await Customer.findById(id);
        console.log(customer);
        res.status(200).json(customer.basic_info);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getFavShops = async (req, res) => {
    const { id } = req.params;
    try {

        const customer = await Customer.findById(id);
        console.log(customer);
        res.status(200).json(customer.fav_shops);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCart = async (req, res) => {
    const { id } = req.params;
    try {
        cust_orders = Order.find({ customer: id, status: 'Unplaced' });
        res.status(200).json({ data: cust_orders });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
