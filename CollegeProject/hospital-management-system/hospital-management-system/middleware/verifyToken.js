const jwt = require('jsonwebtoken');

// Middleware to verify the token
module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the verified user to the request object
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
