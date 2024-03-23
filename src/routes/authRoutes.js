const express = require('express');
const authController = require('../controllers/authControllers.js');
const router = express.Router();

router.get('/facebook', authController.facebookLogin);
router.get('/facebook/callback', authController.facebookCallback);

router.get('/apple', authController.appleLogin);
router.post('/apple/callback', authController.appleCallback);

router.get('/google', authController.googleLogin);
router.get('/google/callback', authController.googleCallback);

module.exports = router;


router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authController.signup);

module.exports = router;