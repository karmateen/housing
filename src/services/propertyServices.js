const property = require('../models/propertymodels.js');

exports.createProperty = async (propertyData) => {
  const property = await Property.create(propertyData);
  return property;
};

exports.updateProperty = async (id, propertyData) => {
  const property = await Property.findByIdAndUpdate(id, propertyData, { new: true });
  return property;
};

exports.deleteProperty = async (id) => {
  await Property.findByIdAndDelete(id);
};