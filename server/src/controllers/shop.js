const Shop = require('../models/shop.js');
const Item = require('../models/item.js');
const payment = require('../utilities/payment');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { debug } = require('../utilities/logging.js');

const firstDetails = async (req, res) => {
    let { name, owner_name, phone, address,gstin,lat, lon, open, close,image, category, payment,token } = req.body;
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
   debug(payment.vpa);
   debug(payment.bank_account);
   try {
       var decoded = jwt.verify(token, config.JWT_SECRET);
       var email = decoded.email;
       const shop = await Shop.findOne({ "basic_info.email": email });
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
                    category: category,
                },
                payment: {
                    vpa: payment.vpa,
                    bank_account: payment.bank_account
                }
            });
            shop.save()
                .then((result) => {
                    res.status(200).json({ message: 'Shop created successfully',result });
                })
                .catch((error) => {
                    res.status(500).json({ message: 'Error creating shop' });
                });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

const secondDetails = (req, res) => {
    const shop = req.shop;
    const { name, owner_name, phone, lat, lon, open, close, image } = req.body;
    Shop.findByIdAndUpdate(shop._id, {
        basic_info: {
            name: name || shop.basic_info.name,
            owner_name: owner_name || shop.basic_info.owner_name,
            phone: phone || shop.basic_info.phone,
            map_coordinates: {
                lat: lat || shop.basic_info.map_coordinates.lat,
                lon: lon || shop.basic_info.map_coordinates.lon
            },
            default_timings: {
                open: open || shop.basic_info.default_timings.open,
                close: close || shop.basic_info.default_timings.close
            },
            image: image || shop.basic_info.image
        }
    })
        .then((result) => {
            res.status(200).json({ message: 'Shop updated successfully', shop: result });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating shop' });
        });
};

const getMenu = (req, res) => {
    const items = Item.find({ shop: req.shop._id });
    res.status(200).json({ message: 'Items fetched successfully', items: items });
};

const getShop = (req, res) => {
    const shop = Shop.findById(req.shop._id).populate('menu').populate('approved.approver');
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

module.exports = {
    firstDetails,
    secondDetails,
    getMenu,
    getShop,
    withdrawMoney,
    changeDefaultFundAccount
};
