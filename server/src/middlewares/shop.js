const Shop = require('../models/shop');

const shopMiddleware = async (req, res, next) => {

    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const email = req.user.emails[0].value;

    const shop = await Shop.find({basic_info: {email: email}});

    if (!shop) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user.shop = shop;
    next()
};

module.exports = { shopMiddleware };
