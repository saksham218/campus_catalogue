const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { 
    scope: ["email"] 
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/ping", //redirectURL
  })
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
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/ping');
  }
);

module.exports = router;