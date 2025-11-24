//routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ---------------------
// Sign up
// ---------------------
router.post('/signup', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      const error = new Error("Username, email, and password are required");
      error.status = 400;
      throw error;
    }

    let user = await User.findOne({ email });
    if (user) {
      const error = new Error("User already exists");
      error.status = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ message: "User created", token });
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Login
// ---------------------
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.status = 400;
      throw error;
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("Invalid credentials");
      error.status = 400;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.status = 400;
      throw error;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: "Logged in", token });
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Profile (protected)
// ---------------------
router.get('/profile', async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ','');
    if (!token) {
      const error = new Error("No token, authorization denied");
      error.status = 401;
      throw error;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
