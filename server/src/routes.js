import express from 'express';

app = express();

app.get('/auth/microsoft',
    passport.authenticate('microsoft', {

    }),
    (req, res) => {
        //The request will be redirected to microsoft, so this
        //function will not be called.
        
    });


app.get('/customer/Basic_Info/Name', (req, res) => {
    

});

app.get('/customer/Basic_Info/Email', (req, res) => {
    

});

app.get('/customer/Basic_Info/roll', (req, res) => {
    

});

app.get('/customer/Basic_Info/Hostel', (req, res) => {
    

});

app.get('/customer/Cart', (req, res) => {
    

});

app.get('/customer/Fav_Shops', (req,res) => {

});

app.get('/shop_owner/Basic_Info/Name', (req,res) => {

});

app.get('/shop_owner/Basic_Info/email', (req,res) => {

});

app.get('/shop_owner/Basic_Info/shop_timings', (req,res) => {

});

app.get('/shop_owner/Basic_Info/phone', (req,res) => {

});

app.get('/shop_owner/Basic_Info/image', (req,res) => {

});

app.get('/shop_owner/Basic_Info/owner_names', (req,res) => {

});

app.get('/shop_owner/Basic_Info/map_coordinates', (req,res) => {

});

app.get('/shop_owner/Basic_Info/category', (req,res) => {

});

app.get('shop_owner/Payment/Contact_Account/Contact_ID', (req, res) => {

});

app.get('shop_owner/Payment/Contact_Account/other_fields', (req, res) => {

});


app.get('shop_owner/Payment/List_accounts/fund_account/vpa', (req, res) => {

});

app.get('shop_owner/Payment/List_accounts/fund_account/bank_details/account_holder_name', (req, res) => {

});

app.get('shop_owner/Payment/List_accounts/fund_account/bank_details/account_number', (req, res) => {

});

app.get('shop_owner/Payment/List_accounts/fund_account/bank_details/IFSC', (req, res) => {

});

app.post('shop_owner/menu/list_items', (req, res) => {

});

app.get('shop_owner/approved/true/admin_name', (req, res) => {

});

app.get('admin/name', (req, res) => {

});

app.get('admin/email', (req, res) => {

});

app.get('shop_timing/shop', (req, res) => {

});

app.get('shop_timing/date/from_date', (req, res) => {

});

app.get('shop_timing/date/to_date', (req, res) => {

});

app.get('shop_timing/status/open/from_time', (req, res) => {

});

app.get('shop_timing/status/open/to_time', (req, res) => {

});

app.get('Item/name', (req, res) => {

});

app.get('Item/shop', (req, res) => {

});

app.get('Item/image', (req, res) => {

});

app.get('Item/amount', (req, res) => {

});

app.get('Item/category', (req, res) => {

});

app.get('Item/availablity', (req, res) => {

});

app.get('order/Order_name', (req, res) => {

});

app.get('order/Type', (req, res) => {});

app.get('order/Time', (req, res) => {});

app.get('order/Shop', (req, res) => {});

app.get('order/User', (req,res) => {});

app.get('order/Amount', (req, res) => {});

app.get('order/items', (req, res) => {});

app.get('order/status', (req,res) => {});

app.get('order/payout_details', (req, res) => {});

app.get('order/print_details', (req, res) => {});

