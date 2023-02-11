const Customer = require('../models/customer');
const Order = require('../models/order');

//TODO: modify addCustomer according to outlook response
const addCustomer = async (req, res) => {

    const customer = req.user;
    const newCustomer = new Customer({
        basic_info: {
            name: customer.name.givenName,
            email: customer.emails[0].value,
            roll: customer.name.familyName
        }
    });

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
        cust_orders = await Order.find({ customer: _id, status: 'Unplaced' });
        res.status(200).json({ data: cust_orders });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateBasicInfo = async (req, res) => {
    const customer = req.customer;
    const { hostel, mobile_num, img } = req.body;

    customer.basic_info = { ...customer.basic_info, hostel, mobile_num, img };

    await customer.save();
    res.json(customer);

}

const updateFavShops = async (req, res) => {
    const customer = req.customer;
    const { fav_shop } = req.body;

    customer.fav_shops.push(fav_shop);

    await customer.save();
    res.json(customer);


}

module.exports = { addCustomer, getBasicInfo, getCart, getFavShops, updateBasicInfo, updateFavShops }