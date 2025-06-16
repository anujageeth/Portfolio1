const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');
const connectDB = require('./config/db');
const events = require('events');
const cors = require('cors');

// Load env vars
dotenv.config();

// Increase max listeners to avoid memory leak warning
events.EventEmitter.defaultMaxListeners = 15;

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    process.exit(1);
});