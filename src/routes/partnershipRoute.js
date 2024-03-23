const express = require('express');
const router = express.Router();
const partnershipController = require('../controllers/partnershipControllers.js');

router.post('/create', partnershipController.createPartnership);
router.post('/upload', partnershipController.uploadDocument);
router.post('/verify', partnershipController.verifyPartnership);

module.exports = router;
