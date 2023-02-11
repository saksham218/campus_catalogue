const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Customer = require('../models/customer');

const generateToken = (customer) => {
    const payload = {
      email: customer.basic_info.email
    };
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: '10h' });
};

const verifyToken = async (token) => {
    try {
        var decoded = jwt.verify(token, config.JWT_SECRET);
        var email = decoded.email;
        const customer = await Customer.findOne({"basic_info.email": email});
        if (!customer) {
            return { error: 'customer not found', customer: null, valid: false };
        }
        return { error: null, customer: customer, valid: true };
    } catch (err) {
        return { error: err, customer: null, valid: false };
    }
};

module.exports = {
    generateToken,
    verifyToken
};
