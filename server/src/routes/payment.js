const express = require('express');
const router = express.Router();

const razorpay = require('../utilities/razorpay');

router.post('/createCustomer', async (req, res) => {
    const { name, email, phone, gstin } = req.body;
    const customer = await razorpay.createCustomer(name, email, phone, gstin);
    res.send(customer);
});

router.post('/createFundBankAccount', async (req, res) => {
    const { customer_id, acc_name, acc_no, ifsc } = req.body;
    const fundBankAccount = await razorpay.createFundBankAccount(customer_id, acc_name, acc_no, ifsc);
    res.send(fundBankAccount);
});

router.post('/createPayout', async (req, res) => {
    const { customer_id, amount, currency, queue_if_low_balance } = req.body;
    const payout = await razorpay.createPayout(customer_id, amount, currency, queue_if_low_balance);
    res.send(payout);
});

module.exports = router;
