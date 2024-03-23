const authService = require ('../services/authServices.js');
const passport = require('passport');


exports.facebookLogin = passport.authenticate('facebook');
exports.facebookCallback = passport.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/' });


exports.appleLogin = passport.authenticate('apple');
exports.appleCallback = passport.authenticate('apple', { failureRedirect: '/login', successRedirect: '/' });


exports.googleLogin = passport.authenticate ('google', { scope: ['profile', 'email'] });
exports.googleCallback = passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' });


exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'You have logged out successfully'});
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const {Firstname, Lastname, email, password } = req.body;
    const user = await authService.register(Firstname,Lastname, email, password);
    res.status(201).json({ user });                                                                                                                                                                                                                                                                                                                   
  } catch (error) {
    next(error);
  }
};
