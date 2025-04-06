require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());  // Parses incoming requests with JSON payloads
app.use(cors());          // Enables Cross-Origin Resource Sharing
app.use(helmet());        // Adds security-related HTTP headers
app.use(morgan('dev'));   // Logs HTTP requests

// Routes
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');  // Add appointmentRoutes

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);  // Add this route for appointments

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
