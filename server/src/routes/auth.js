const express = require('express');
const passport = require('passport');
const { customerMiddleware } = require('../middlewares/customer');
const router = express.Router();
const customer_token = require('../utilities/customertoken');
const shop_token = require('../utilities/shoptoken');
const { debug } = require('../utilities/logging');
const Customer = require('../models/customer');
const Shop = require('../models/shop');

router.get(
  "/google",
  passport.authenticate("google", { 
    scope: ['email','profile'] 
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {failureRedirect: "/login",}),
  async (req,res) => {
    
    const email = req.user.emails[0].value;
  
    const shop = await Shop.findOne({basic_info: {email: email}});
    if(!shop) {
      //create shop and redirect to take details
    }
    else {
      if(shop.approved.status) {
        //generate token
        const token = shop_token.generateToken(shop);
        debug(`Generated token: ${token}`);
        res.redirect(`http://localhost:3000/?token=${token}`);
      } else {
        //redirect to shop not approved page
      }
  }
}
);

router.get('/microsoft',
  passport.authenticate('microsoft', {
    // Optionally define any authentication parameters here
    // For example, the ones in https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
    prompt: 'select_account',
  })
);

router.get('/microsoft/callback', 
  passport.authenticate('microsoft', { failureRedirect: '/auth/microsoft' }),
  // customerMiddleware
  async (req,res) => {
    
    const email = req.user.emails[0].value;
  
    const customer = await Customer.findOne({"basic_info.email": email});

    if(!customer) {
      const new_customer = new Customer({
        basic_info: {
          email: email,
          name: req.user.displayName,
          roll: req.user.name.familyName,
        }
      })
      await new_customer.save();
      //generate token
      const token = customer_token.generateToken(new_customer);
      debug(`Generated token: ${token}`);
      res.redirect(`http://localhost:3000/?token=${token}`);
    }
    else {
      //generate token
      const token = customer_token.generateToken(customer);
      debug(`Generated token: ${token}`);
      res.redirect(`http://localhost:3000/?token=${token}`);
    }
  }
);

module.exports = router;