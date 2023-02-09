const dotenv = require('dotenv');
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy
const MicrosoftStrategy = require("passport-microsoft").Strategy
const config = require("../config/config")
const chalk = require('../utilities/logging')

const models = require("../models/customer");

passport.serializeUser((user, done) => {
  process.nextTick(() => {
    done(null, user);
  })
});

passport.deserializeUser((id, done) => {
  process.nextTick(() => {
    done(null, id);
  }
)});

const googleStrategy = new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
  async (req, token, refreshToken, profile, done) => {
    return done(null, profile);
    // models.User.findOne({ where: { googleId: profile.id } }).then(
    //   async (userExist) => {
    //     let transaction;
    //     if (userExist) {
    //       console.log("passport hi");
    //       return done(null, userExist);
    //     } else {
    //       try {
    //         console.log("test", profile);
    //         return models.User.create({
    //           googleId: profile.id,
    //           username: profile.displayName
    //             ? profile.displayName
    //             : profile.emails[0].value,
    //           gravatar: profile.photos[0].value,
    //           email: profile.emails[0].value,
    //         }).then((user) => {
    //           // req.user = user;
    //           // req.session.user = user; // refresh the session value
    //           return done(null, user);
    //         });
    //       } catch (err) {
    //         return done(null, err);
    //       }
    //     }
    //   }
    // );
  }
)



const microsoftStrategy = new MicrosoftStrategy({
    // Standard OAuth2 options
    clientID: config.MICROSOFT_CLIENT_ID,
    clientSecret: config.MICROSOFT_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/microsoft/callback",
    scope: ['user.read'],

    // Microsoft specific options

    // [Optional] The tenant for the application. Defaults to 'common'. 
    // Used to construct the authorizationURL and tokenURL
    tenant: 'common',

    // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
    authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

    // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
    tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile)
    // User.findOrCreate({ userId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
);

module.exports = {
  googleStrategy,
  microsoftStrategy,
}

