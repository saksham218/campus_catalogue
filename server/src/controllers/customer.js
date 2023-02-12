const Customer = require('../models/customer');
const Item = require('../models/item');
const Order = require('../models/order');
const Shop = require('../models/shop');
const { debug } = require('../utilities/logging');

//TODO: modify addCustomer according to outlook response

const getBasicInfo = async (req, res) => {
    const { _id } = req.customer;

    try {
        const customer = await Customer.findById(_id);
        res.status(200).json(customer.basic_info);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getFavShops = async (req, res) => {
    const { _id } = req.customer;
    const customer = await Customer.findById(_id).populate('fav_shops');
    res.status(200).json(customer.fav_shops);
};

const addFavoriteShop = async (req, res) => {
    const { shopId } = req.body;
    // if shop is present then remove it else add it
    for (let i = 0; i < req.customer.fav_shops.length; i++) {
        if (req.customer.fav_shops[i] == shopId) {
            req.customer.fav_shops.splice(i, 1);
            await req.customer.save();
            return res.status(200).json(req.customer.fav_shops);
        }
    }
    const shop = await Shop.findById(shopId);
    if (!shop) return res.status(404).json({ message: 'Shop not found' });
    req.customer.fav_shops.push(shopId);
    await req.customer.save();
    res.status(200).json(req.customer.fav_shops);
};

const getCart = async (req, res) => {
    const { _id } = req.customer;
    try {
        cust_orders = await Order.find({ customer: _id, status: 'Unplaced' });
        res.status(200).json(cust_orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateBasicInfo = async (req, res) => {
    const customer = req.customer;
    const { hostel, mobile_number, img } = req.body;
    debug(`hostel: ${hostel}, mobile_number: ${mobile_number}, img: ${img}`);
    customer.basic_info.hostel = hostel || customer.basic_info.hostel;
    customer.basic_info.mobile_number = mobile_number || customer.basic_info.mobile_number;
    customer.basic_info.img = img || customer.basic_info.img;
    await customer.save();
    res.json(customer);
};

const getShopMenu = async (req, res) => {
    try {
        const { shopId } = req.params;
        const items = await Item.find({ shop: shopId });
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getBasicInfo, getCart, getFavShops, updateBasicInfo, addFavoriteShop, getShopMenu };
