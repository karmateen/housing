const express = require('express');
const userController = require('../controllers/userControllers.js');

const router = express.Router();

router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;