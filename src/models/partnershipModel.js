const mongoose = require('mongoose');

const partnershipSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  residentialAddress: {
    type: String,
    required: true
  },
  rentalHouseAddress: {
    type: String,
    required: true
  },
  houseDetail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rentalPermit: {
    type: String,
    required: true
  },
  identificationCard: {
    type: String,
    required: true
  },
  homeAddressVerification: {
    type: String, 
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  }
});

const Partnership = mongoose.model('Partnership', partnershipSchema);

module.exports = Partnership;
