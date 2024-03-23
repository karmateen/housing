const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },

  ratings: {
    type: Number,
    required: true,
  },

});


const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
