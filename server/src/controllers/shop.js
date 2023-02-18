const Shop = require('../models/shop.js');
const Order= require('../models/order.js');
const Item = require('../models/item.js');
const payment = require('../utilities/payment');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { debug } = require('../utilities/logging.js');

const firstDetails = async (req, res) => {
    let { name, owner_name, phone, address,landmark, gstin, lat, lon, open, close, image, category, payment, token } = req.body;
    /*
        payment: {
            vpa :[{
                "id":"abc@okhdfc",
                "is_default":true,
            }],
            bank :[{
                "accno": "1234567890",
                "ifsc": "ABC1234567",
                "acc_holder_name": "ABC",
                "is_default": true,
            }],
        }
        */
    try {
        var decoded = jwt.verify(token, config.JWT_SECRET);
        var email = decoded.email;
        const shop = await Shop.findOne({ 'basic_info.email': email });
        if (shop) {
            // debug(shop);
            res.status(400).json({ message: 'Shop already exists' });
        } else {
            const shop = new Shop({
                basic_info: {
                    name: name,
                    owner_name: owner_name,
                    email: email,
                    phone: phone,
                    address: address,
                    landmark: landmark,
                    gstin: gstin,
                    map_coordinates: {
                        lat: lat,
                        lon: lon
                    },
                    default_timings: {
                        open: open,
                        close: close
                    },
                    image: image,
                    category: category
                },
                payment: {
                    vpa: payment.vpa,
                    bank_account: payment.bank_account
                }
            });
            shop.save()
                .then((result) => {
                    res.status(200).json({ message: 'Shop created successfully', result });
                })
                .catch((error) => {
                    res.status(500).json({ message: 'Error creating shop' });
                });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

const secondDetails = async (req, res) => {
    const shop = req.shop;
    const { name, owner_name, phone, address,landmark, lat, lon, open, close, image } = req.body;
    shop.basic_info.name = name || shop.basic_info.name;
    shop.basic_info.owner_name = owner_name || shop.basic_info.owner_name;
    shop.basic_info.phone = phone || shop.basic_info.phone;
    shop.basic_info.address = address || shop.basic_info.address;
    shop.basic_info.landmark = landmark || shop.basic_info.landmark;
    shop.basic_info.map_coordinates.lat = lat || shop.basic_info.map_coordinates.lat;
    shop.basic_info.map_coordinates.lon = lon || shop.basic_info.map_coordinates.lon;
    shop.basic_info.default_timings.open = open || shop.basic_info.default_timings.open;
    shop.basic_info.default_timings.close = close || shop.basic_info.default_timings.close;
    shop.basic_info.image = image || shop.basic_info.image;
    shop.save()
        .then((result) => {
            res.status(200).json({ message: 'Shop updated successfully', result: result.basic_info });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating shop' });
        });
};

const getMenu = async (req, res) => {
    const items = await Item.find({ shop: req.shop._id });
    res.status(200).json({ message: 'Items fetched successfully', items: items });
};

const getShop = async (req, res) => {
    const shop = await Shop.findById(req.shop._id).populate('menu').populate('approved.approver');
    res.status(200).json({ message: 'Shop fetched successfully', shop: shop });
};

const withdrawMoney = async (req, res) => {
    const shop = req.shop;
    const data = await payment.withdraw(shop);
    if (!data.status) {
        res.status(500).json({ message: 'Error withdrawing money' });
    } else {
        res.status(200).json({ message: 'Money withdrawn successfully' });
    }
};

const changeDefaultFundAccount = async (req, res) => {
    const shop = req.shop;
    const { fund_account_id } = req.body;
    const data = await payment.changeDefaultFundAccount(shop, fund_account_id);
    if (!data.status) {
        res.status(500).json({ message: 'Error changing default fund account' });
    } else {
        res.status(200).json({ message: 'Default fund account changed successfully', shop: data.data });
    }
};

const getPendingOrders = async (req, res) => {
    const shop = req.shop;
    try{
    const orders = await Order.find({ shop: shop._id, status: 'Pending' });
    res.status(200).json({ message: 'Orders fetched successfully', orders: orders });
    }catch(err){
        res.status(500).json({ message: 'Error fetching orders' });
    }
}

const getAllOrders = async (req, res) => {
    const shop = req.shop;
    try{
        const orders = await Order.find({
            shop: shop._id, status: {
                $in: ['Accepted', 'Rejected', 'Delivered', 'Ready']
            }
        });
        
        res.status(200).json({ message: 'Orders fetched successfully', orders: orders });

    }catch(err){
        res.status(500).json({ message: 'Error fetching orders' });
    }
}

module.exports = {
    firstDetails,
    secondDetails,
    getMenu,
    getShop,
    withdrawMoney,
    changeDefaultFundAccount,
    getAllOrders,
    getPendingOrders
};
