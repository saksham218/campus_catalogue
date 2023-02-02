const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/campus_catalogue';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

module.exports = {
    PORT,
    MONGODB_URI,
    SALT_ROUNDS,
    JWT_SECRET
};
