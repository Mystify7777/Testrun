const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');
const router = express.Router();

router.use(verifyToken); // Protect all routes in this file

// Nurse-specific route
router.get('/dashboard', verifyRole('nurse'), (req, res) => {
  res.json({ message: 'Welcome to the nurse dashboard!' });
});

module.exports = router;
