const propertyService = require('../services/propertyServices.js');

exports.createProperty = async (req, res, next) => {
  try {
    const property = await propertyService.createProperty(req.body);
    res.status(201).json({ property });
  } catch (error) {
    next(error);
  }
};

exports.updateProperty = async (req, res, next) => {
  try {
    const property = await propertyService.updateProperty(req.params.id, req.body);
    res.status(200).json({ property });
  } catch (error) {
    next(error);
  }
};

exports.deleteProperty = async (req, res, next) => {
  try {
    await propertyService.deleteProperty(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
