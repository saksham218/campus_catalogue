const razorpay = require('./razorpay');
const Order = require('../models/order');

const configureShopAfterApproval = async (shop) => {
    // create customer
    var customer_response = await razorpay.createCustomer(shop.basic_info.name, shop.basic_info.email, shop.basic_info.phone, shop.basic_info.gstin);

    if (!customer_response.status) {
        return { status: false, error: customer.error };
    }
    var default_fund_account = '';
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
        }
    }
    if (default_fund_account == '') {
        default_fund_account = fund_accounts[0].id;
    }

    // update shop
    shop.razorpay.customer_id = customer_response.data.id;
    shop.razorpay.default_fund_account = default_fund_account;
    return { status: true, data: shop };
};

const withdraw = async (shop) => {
    const orders = Order.find({ shop_id: shop._id, status: 'completed', createdAt: { $gt: shop.razorpay.last_payment } }).sort({ createdAt: 1 });
    var total_amount = 0;
    var last_Date = orders[orders.length - 1].createdAt;
    for (var i = 0; i < orders.length; i++) {
        total_amount += orders[i].total_amount;
    }
};

module.exports = {
    configureShopAfterApproval
};
