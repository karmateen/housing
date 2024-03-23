const mongoose = require('mongoose');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const AppleStrategy = require('passport-apple');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

const FACEBOOK_APP_ID = 'your_facebook_app_id_here';
const FACEBOOK_APP_SECRET = 'your_facebook_app_secret_here';

const APPLE_CLIENT_ID = 'your_apple_client_id_here';
const APPLE_TEAM_ID = 'your_apple_team_id_here';
const APPLE_KEY_ID = 'your_apple_key_id_here';
const APPLE_PRIVATE_KEY_PATH = '/path/to/your/apple/private/key.pem';
const GOOGLE_CLIENT_ID = 'your_google_client_id_here';
const GOOGLE_CLIENT_SECRET = 'your_google_client_secret_here';

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'email']
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookId: profile.id }, (err, user) => {
    if (err) { return done(err); }
    if (user) {
      // User already exists, log in
      return done(null, user);
    } else {
      // Create new user
      const newUser = new User({
        facebookId: profile.id,
        username: profile.displayName
      
      });
      newUser.save((err) => {
        if (err) { return done(err); }
        return done(null, newUser);
      });
    }
})}));

passport.use(new AppleStrategy({
  clientID: APPLE_CLIENT_ID,
  teamID: APPLE_TEAM_ID,
  callbackURL: 'http://localhost:3000/auth/apple/callback',
  keyID: APPLE_KEY_ID,
  privateKeyPath: 'path/to/apple/private/key.pem'
}, (accessToken, refreshToken, profile, done) => {
   User.findOne({ appleId: profile.id }, (err, user) => {
    if (err) { return done(err); }
    if (user) {
      // User already exists, log in
      return done(null, user);
    } else {
      // Create new user
      const newUser = new User({
        appleId: profile.id,
        email: profile.email,
        firstName: profile.name.firstName,
        lastName: profile.name.lastName
      });
      newUser.save((err) => {
        if (err) { return done(err); }
        return done(null, newUser);
      });
    }
  });
}));

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    user.findOne({ googleId: profile.id }, (err, user) => {
      if (err) { return done(err); }
      if (user) {
        // User already exists, log in
        return done(null, user);
      } else {
        // Create new user
        const newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value
        
        });
        newUser.save((err) => {
          if (err) { return done(err); }
          return done(null, newUser);
        });
      }
    });

  }));
  
module.exports = User;
