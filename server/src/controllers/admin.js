const Admin = require('../models/admin');
const Shop = require('../models/shop');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const { generateToken } = require('../utilities/admintoken');
const saltRounds = config.SALT_ROUNDS;

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
    }
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(admin);
    res.status(200).json({ token });
};

const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    const admin = await Admin.findOne({ email });
    if (admin) {
        return res.status(409).json({ message: 'Admin already exists' });
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const newAdmin = new Admin({ name, email, password: hash });
    await newAdmin.save();
    res.status(201).json({ admin: newAdmin });
};

const update = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
    }
    admin.name = name;
    await admin.save();
    res.status(200).json({ admin });
};

const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
    }
    const match = await bcrypt.compare(oldPassword, admin.password);
    if (!match) {
        return res.status(401).json({ message: 'Wrong Password' });
    }
    const hash = await bcrypt.hash(newPassword, saltRounds);
    admin.password = hash;
    await admin.save();
    res.status(200).json({ admin });
};

const approveShop = async (req, res) => {
    const { shopId } = req.body;
    if (!shopId) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    var shop = await Shop.findById(shopId);
    if (!shop) {
        return res.status(404).json({ message: 'Shop not found' });
    }
    shop.approved.status = true;
    shop.approved.date = Date.now();
    shop.approved.approver = req.admin._id;
    await shop.save();
    res.status(200).json({ message: 'Shop Approved', shop });
};

const rejectShop = async (req, res) => {
    const { shopId } = req.body;
    if (!shopId) {
        return res.status(400).json({ message: 'Invalid data' });
    }
    var shop = await Shop.findById(shopId);
    if (!shop) {
        return res.status(404).json({ message: 'Shop not found' });
    }
    await shop.delete();
    res.status(200).json({ message: 'Shop Rejected', shop });
};

module.exports = {
    login,
    register,
    update,
    changePassword,
    approveShop,
    rejectShop
};
