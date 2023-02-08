const { instance, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = require('../config/config');
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
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error;
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
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
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
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

const createPayout = async (customer_id, amount, currency = 'INR', queue_if_low_balance = true) => {
    // get all fund accounts
    const data = await instance.fundAccount.fetch(customer_id);
    // create a payout
    let mode = '';
    if (data && data.count > 0) {
        const fundAccount = data.items[0];
        if (fundAccount.account_type === 'bank_account') {
            mode = 'IMPS';
        } else if (fundAccount.account_type === 'vpa') {
            mode = 'UPI';
        }
        var headers = {
            'Content-Type': 'application/json'
        };

        var dataString = `{\n  "account_number": "7878780080316316",\n  "fund_account_id": ${fundAccount.id},\n  "amount": ${amount},\n  "currency": ${currency},\n  "mode": ${mode},\n  "purpose": "payout",\n  "queue_if_low_balance": ${queue_if_low_balance} \n}`;

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
                console.log(body);
                return body;
            }
            console.log(error);
            return error;
        }

        request(options, callback);
    }
    // return data;
};

module.exports = {
    createCustomer,
    createFundBankAccount,
    createFundVPAAccount,
    createPayout
};
