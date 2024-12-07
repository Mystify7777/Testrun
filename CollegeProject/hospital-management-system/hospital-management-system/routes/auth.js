
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Update with the correct path
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error during registration', error: error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '6h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
});

// User fetching route
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users); // Send users data as response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// User Profile (fetch logged-in user data)
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // req.user comes from the verifyToken middleware
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
