// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();  // Create express router

// Login route
router.post('/login', authController.login);

// Example protected route (use the token verification middleware)
router.get('/protected', authMiddleware.verifyToken, (req, res) => {
  res.status(200).json({ message: 'Access to protected route granted', user: req.user });
});

module.exports = router;  // Export the router
