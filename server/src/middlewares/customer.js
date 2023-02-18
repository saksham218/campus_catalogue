const Customer = require('../models/customer');
const { verifyToken } = require('../utilities/customertoken');

const customerMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const data = await verifyToken(token);
  if (data.valid) {
    const customer = await Customer.findById(data.customer._id);
    if (!customer) {
      return res.status(401).json({ message: 'Customer Dont exist' });
    }
    req.customer = customer;
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized', error: data.error });
  }
};

module.exports = { customerMiddleware };