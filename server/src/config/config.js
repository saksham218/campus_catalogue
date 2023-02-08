const dotenv = require('dotenv');
const Razorpay = require('razorpay');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/campus_catalogue';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});
module.exports = {
    PORT,
    MONGODB_URI,
    SALT_ROUNDS,
    JWT_SECRET,
    instance,
    RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET
};
