const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);   // User registration
router.post('/login', loginUser);         // User login
router.get('/me', protect, getUserInfo);  // Get user info (protected route)

module.exports = router;
