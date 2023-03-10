const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Shop = require('../models/shop');

const generateToken = (shop) => {
    const payload = {
        email: shop.basic_info.email
    };
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: '10d' });
};

const verifyToken = async (token) => {
    try {
        var decoded = jwt.verify(token, config.JWT_SECRET);
        var email = decoded.email;
        const shop = await Shop.findOne({ 'basic_info.email': email });
        if (!shop) {
            return { error: 'shop not found', shop: null, valid: false };
        }
        return { error: null, shop: shop, valid: true };
    } catch (err) {
        return { error: err, shop: null, valid: false };
    }
};

module.exports = {
    generateToken,
    verifyToken
};
