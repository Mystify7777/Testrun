const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Update with the correct path
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('User route works!');
  });
  
// User Registration
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
});

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).send('User not found');
  
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).send('Invalid credentials');

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
