const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB database
connectDB();

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the JWT Auth API');
  });

// Middleware
app.use(bodyParser.json());  // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

// Error handling (optional)
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Generic error handler (you can customize it)
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
