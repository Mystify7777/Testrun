
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Update with the correct path
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();


// User Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate required fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format (using a simple regex or any other validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already taken' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save(); // Save to database
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error); // Log error for better visibility
    res.status(500).json({ message: 'Error during registration', error: error.message });
  }
});



// User Login
router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  // Ensure both fields are provided
  if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required' });
  }

  try {
    // Find user by name
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(400).json({ message: 'Invalid name or password' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid name or password' });
    }

    // Generate JWT and send response
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});


// User Profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // req.user comes from the verifyToken middleware
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error); // Log error
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
});


// User Profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // req.user comes from the verifyToken middleware
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error); // Log error
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
});


module.exports = router;
