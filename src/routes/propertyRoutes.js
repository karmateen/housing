const express = require('express');
const propertyController = require('../controllers/propertyControllers.js');

const router = express.Router();

router.post('/properties', propertyController.createProperty);
router.put('/properties/:id', propertyController.updateProperty);
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router