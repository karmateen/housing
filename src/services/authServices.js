const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');
const User = require('../models/userModels.js');

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error('Invalid email or password');

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30minutes' });
  return token;
};

exports.signup = async (Firstname, Lastname, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ Firstname, Lastname, email, password: hashedPassword });
  return user;
};
