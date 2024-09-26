const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth'); // Ensure correct path
app.use('/api/auth', authRoutes);

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
