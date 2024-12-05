const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');
const router = express.Router();

router.use(verifyToken); // Protect all routes in this file

// Doctor-specific route
router.get('/dashboard', verifyRole('doctor'), (req, res) => {
  res.json({ message: 'Welcome to the doctor dashboard!' });
});

module.exports = router;
