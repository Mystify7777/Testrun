const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');
const router = express.Router();

router.use(verifyToken); // Protect all routes in this file

router.get('/dashboard', verifyRole('admin'), (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard!' });
});

module.exports = router;
