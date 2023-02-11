const { instance, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = require('../config/config');
const { debug, error } = require('../utilities/logging');
var request = require('request');

const createCustomer = async (name, email, phone, gstin) => {
    instance.customers
        .create({
            name: name,
            contact: phone,
            email: email,
            fail_existing: 0,
            gstin: gstin
        })
        .then((data) => {
            return { status: true, data: data };
        })
        .catch((error) => {
            error(error);
            return { status: false, error: error };
        });
};

const createFundBankAccount = async (cust_id, acc_name, acc_no, ifsc) => {
    instance.fundAccount
        .create({
            customer_id: cust_id,
            account_type: 'bank_account',
            bank_account: {
                name: acc_name,
                account_number: acc_no,
                ifsc: ifsc
            }
        })
        .then((data) => {
            debug(data);
            return { status: true, data: data };
        })
        .catch((error) => {
            error(error);
            return { status: false, error: error };
        });
};

const createFundVPAAccount = async (cust_id, vpa) => {
    instance.fundAccount
        .create({
            customer_id: cust_id,
            account_type: 'vpa',
            vpa: {
                address: vpa
            }
        })
        .then((data) => {
            debug(data);
            return { status: true, data: data };
        })
        .catch((error) => {
            error(error);
            return { status: false, error: error };
        });
};

const createPayout = async (fund_account_id, mode, amount, currency = 'INR', queue_if_low_balance = true) => {
    try {
        var headers = {
            'Content-Type': 'application/json'
        };

        var dataString = `{\n  "account_number": "7878780080316316",\n  "fund_account_id": ${fund_account_id},\n  "amount": ${amount},\n  "currency": ${currency},\n  "mode": ${mode},\n  "purpose": "payout",\n  "queue_if_low_balance": ${queue_if_low_balance} \n}`;

        var options = {
            url: 'https://api.razorpay.com/v1/payouts',
            method: 'POST',
            headers: headers,
            body: dataString,
            auth: {
                user: RAZORPAY_KEY_ID,
                pass: RAZORPAY_KEY_SECRET
            }
        };

        function callback(error, response, body) {
            if (!error) {
                debug(body);
                return { status: true, data: body };
            }
            error(error);
            return { status: false, error: error };
        }

        request(options, callback);
    } catch (error) {
        error(error);
        return { status: false, error: error };
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
    } catch (error) {
        error(error);
        return { status: false, error: error };
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
    } catch (error) {
        error(error);
        return { status: false, error: error };
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
