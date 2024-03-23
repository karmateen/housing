const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageControllers.js');

// Create message
router.post('/', messageController.createMessage);

module.exports = router;
