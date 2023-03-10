const Shop = require('../models/shop');
const { verifyToken } = require('../utilities/shoptoken');

const shopMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token not Provided' });
    }
    const data = await verifyToken(token);
    if (data.valid) {
        const shop = await Shop.findById(data.shop._id);
        if (!shop) {
            return res.status(401).json({ message: 'Shop doesnt exists' });
        }
        if (!shop.approved.status) {
            return res.status(401).json({ message: 'Unapproved' });
        }
        req.shop = shop;
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized11', error: data.error });
    }
};

module.exports = { shopMiddleware };
