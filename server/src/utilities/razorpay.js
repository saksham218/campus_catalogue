const { instance, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = require('../config/config');
const { debug, error } = require('../utilities/logging');
const axios = require('axios');

const createCustomer = async (name, email, phone, gstin) => {
    try {
        const data = await instance.customers.create({
            name: name,
            contact: phone,
            email: email,
            fail_existing: 0,
            gstin: gstin
        });
        return { status: true, data: data };
    } catch (err) {
        return { status: false, error: err.error };
    }
};

const createFundBankAccount = async (cust_id, acc_name, acc_no, ifsc) => {
    try {
        const data = await instance.fundAccount.create({
            customer_id: cust_id,
            account_type: 'bank_account',
            bank_account: {
                name: acc_name,
                account_number: acc_no,
                ifsc: ifsc
            }
        });
        return { status: true, data: data };
    } catch (err) {
        return { status: false, error: err.error };
    }
};

const createFundVPAAccount = async (cust_id, vpa) => {
    try {
        const data = await instance.fundAccount.create({
            customer_id: cust_id,
            account_type: 'vpa',
            vpa: {
                address: vpa
            }
        });
        return { status: true, data: data };
    } catch (err) {
        return { status: false, error: err.error };
    }
};

const createPayout = async (fund_account_id, mode, amount, currency = 'INR', queue_if_low_balance = true) => {
    try {
        const data = await axios({
            method: 'post',
            url: 'https://api.razorpay.com/v1/payouts',
            auth: {
                username: RAZORPAY_KEY_ID,
                password: RAZORPAY_KEY_SECRET
            },
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                account_number: '7878780080316316',
                fund_account_id: fund_account_id,
                amount: amount,
                currency: currency,
                mode: mode,
                purpose: 'payout',
                queue_if_low_balance: queue_if_low_balance
            }
        });
        debug(data.data);
        return { status: true, data: data };
    } catch (err) {
        error(err.response.data.error);
        return { status: false, error: err.response.data.error };
    }
};

const createOrder = async (amount, currency = 'INR', receipt, payment_capture = 1) => {
    try {
        const data = await instance.orders.create({
            amount: amount,
            currency: currency, // INR
            receipt: receipt,
            payment_capture: payment_capture
        });
        return { status: true, data: data };
    } catch (err) {
        error(err);
        return { status: false, error: err.error };
    }
};

const refundPayment = async (payment_id, amount, order_id) => {
    try {
        const data = await instance.payments.refund(payment_id, {
            amount: amount,
            speed: 'normal',
            receipt: order_id
        });
        return { status: true, data: data };
    } catch (err) {
        error(err);
        return { status: false, error: err.error };
    }
};

module.exports = {
    createCustomer,
    createFundBankAccount,
    createFundVPAAccount,
    createPayout,
    createOrder,
    refundPayment
};
