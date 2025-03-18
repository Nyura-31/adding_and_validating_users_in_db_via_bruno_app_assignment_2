require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // Import MongoDB connection
const authRoutes = require('./routes/auth');  // Import auth routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Middleware to parse JSON requests

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
