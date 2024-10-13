const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // Ensure correct path

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Server works!');
  });
// Routes
app.use('/api/auth', authRoutes); // Register auth routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
