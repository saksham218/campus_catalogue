import express from 'express';

app = express();

app.get('/auth/microsoft',
    passport.authenticate('microsoft', {

    }),
    (req, res) => {
        //The request will be redirected to microsoft, so this
        //function will not be called.

    });


app.get('/customer/Basic_Info', (req, res) => {


});


app.get('/customer/Cart', (req, res) => {


});

app.get('/customer/Fav_Shops', (req, res) => {

});