// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const forestRoutes = require('./routes/forest');
const reportRoutes = require('./routes/report');
const dashboardRoutes = require("./routes/dashboard");
const predictionRoutes = require('./routes/prediction');

require('dotenv').config();

const app = express();

// ---------------------
// Middleware
// ---------------------
app.use(cors());
app.use(express.json());

// Logging middleware — logs method, URL, and timestamp
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ---------------------
// Routes
// ---------------------
app.use('/api/auth', authRoutes);
app.use('/api/forest', forestRoutes);
app.use('/api/report', reportRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/prediction', predictionRoutes);

// Root test route
app.get('/', (req, res) => {
  res.json({ message: "Canopy backend is running" });
});

// ---------------------
// MongoDB connection
// ---------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ---------------------
// Start server
// ---------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ---------------------
// Centralized error handler
// ---------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});
