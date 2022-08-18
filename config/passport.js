const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const {ObjectID} = require('mongodb')

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].values
          }
        
          try {
            let user = await User.findOne({ googleId: profile.id})
  
            if(user) {
              done(null, user)
            } else {
              user = await User.create(newUser)
              done(null, user)
            }
          } catch (err) {
            console.error(err)
          }
      }
    )
  )

  passport.deserializeUser(function (id, done) {
    User.findOne({ _id: ObjectID(id)  }, function (err,user) {
      done(err,user)
    })
  });

  // user object -> id
  passport.serializeUser(function(user, cb) {
    return cb(null, user.id);
  });

  }