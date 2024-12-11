module.exports = (requiredRoles) => {
  return (req, res, next) => {
    // Check if the user's role is in the allowed roles array
    if (!requiredRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
