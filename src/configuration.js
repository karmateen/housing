module.exports = {
    DATABASE_URL: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: '1h'
  };