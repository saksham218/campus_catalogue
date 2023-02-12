const razorpay = require('./razorpay');
const Order = require('../models/order');
const { debug } = require('./logging');

const configureShopAfterApproval = async (shop) => {
    // create customer
    var customer_response = await razorpay.createCustomer(shop.basic_info.name, shop.basic_info.email, shop.basic_info.phone, shop.basic_info.gstin);
    // return { status: true, data: customer_response };
    if (!customer_response.status) {
        return { status: false, error: customer_response.error };
    }
    var default_fund_account = '';
    var default_mode = '';
    var fund_accounts = [];
    // create fund accounts
    for (var i = 0; i < shop.payment.bank_account.length; i++) {
        var bank_account = shop.payment.bank_account[i];
        var fund_bank_account_response = await razorpay.createFundBankAccount(customer_response.data.id, bank_account.acc_holder_name, bank_account.accno, bank_account.ifsc);
        if (!fund_bank_account_response.status) {
            return { status: false, error: fund_bank_account_response.error };
        }
        shop.payment.bank_account[i].fund_account_id = fund_bank_account_response.data.id;
        fund_accounts.push(fund_bank_account_response.data);
        if (bank_account.is_default) {
            default_fund_account = fund_bank_account_response.data.id;
            default_mode = 'IMPS';
        }
    }
    for (var i = 0; i < shop.payment.vpa.length; i++) {
        var vpa = shop.payment.vpa[i];
        var fund_vpa_account_response = await razorpay.createFundVPAAccount(customer_response.data.id, vpa.id);
        if (!fund_vpa_account_response.status) {
            return { status: false, error: fund_vpa_account_response.error };
        }
        fund_accounts.push(fund_vpa_account_response.data);
        shop.payment.vpa[i].fund_account_id = fund_vpa_account_response.data.id;
        if (vpa.is_default) {
            default_fund_account = fund_vpa_account_response.data.id;
            default_mode = 'UPI';
        }
    }
    if (default_fund_account == '') {
        default_fund_account = fund_accounts[0].id;
    }
    // update shop
    shop.razorpay.customer_id = customer_response.data.id;
    shop.razorpay.default_fund_account.id = default_fund_account;
    shop.razorpay.default_fund_account.mode = default_mode;
    await shop.save();
    return { status: true, data: shop };
};

const withdraw = async (shop) => {
    const data = await razorpay.createPayout(shop.razorpay.default_fund_account.id, shop.razorpay.default_fund_account.mode, shop.razorpay.due_payment, 'INR', true);
    // debug(data);
    if (!data.status) {
        return { status: false, error: data.error };
    }
    shop.razorpay.due_payment = 0;
    await shop.save();
    return { status: true, data: data.data };
};

const changeDefaultFundAccount = async (shop, fund_account_id) => {
    // check if fund_account_id is valid
    var fund_account = shop.payment.bank_account.find((account) => account.fund_account_id == fund_account_id);
    if (fund_account == undefined) {
        fund_account = shop.payment.vpa.find((account) => account.fund_account_id == fund_account_id);
        if (fund_account == undefined) {
            return { status: false, message: 'Invalid fund account id' };
        }
    }
    // remove default from all accounts and add default to fund_account_id
    var is_bank_account = false;
    for (var i = 0; i < shop.payment.bank_account.length; i++) {
        shop.payment.bank_account[i].is_default = false;
        if (shop.payment.bank_account[i].fund_account_id == fund_account_id) {
            shop.payment.bank_account[i].is_default = true;
            is_bank_account = true;
        }
    }
    for (var i = 0; i < shop.payment.vpa.length; i++) {
        shop.payment.vpa[i].is_default = false;
        if (shop.payment.vpa[i].fund_account_id == fund_account_id) {
            shop.payment.vpa[i].is_default = true;
        }
    }
    shop.razorpay.default_fund_account.id = fund_account_id;
    shop.razorpay.default_fund_account.mode = is_bank_account ? 'IMPS' : 'UPI';
    await shop.save();
    return { status: true, data: shop };
};

module.exports = {
    configureShopAfterApproval,
    withdraw,
    changeDefaultFundAccount
};
