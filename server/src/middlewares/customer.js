const Customer = require('../models/customer');

const customerMiddleware = async (req, res, next) => {
  
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const email = req.user.emails[0].value;

  const customer = await Customer.find({basic_info: {email: email}});

  if (!customer) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.user.customer = customer;
  next()
};

module.exports = { customerMiddleware};