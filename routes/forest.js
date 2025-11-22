//routes/forest.js

const express = require('express');
const router = express.Router();
const Forest = require('../models/Forest');
const jwt = require('jsonwebtoken');
const { VALID_REGIONS } = require('../constants');

// ---------------------
// Middleware to protect routes
// ---------------------
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ','');
    if (!token) {
      const error = new Error('No token, authorization denied');
      error.status = 401;
      throw error;
    }

    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    next(err);
  }
};

// ---------------------
// Create forest
// ---------------------
router.post('/', auth, async (req, res, next) => {
  try {
    const { name, region, treeTypes, coordinates, status, images } = req.body;
    if (!name || !region || !treeTypes || !coordinates) {
      const error = new Error("Name, region, treeTypes, and coordinates are required");
      error.status = 400;
      throw error;
    }

    // ✅ Region validation
    if (!VALID_REGIONS.includes(region)) {
      const error = new Error(`Invalid region. Must be one of: ${VALID_REGIONS.join(', ')}`);
      error.status = 400;
      throw error;
    }

    const forest = new Forest({ name, region, treeTypes, coordinates, status, images });
    await forest.save();
    res.status(201).json({ message: 'Forest site added', forest });
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Get all forests
// ---------------------
router.get('/', async (req, res, next) => {
  try {
    const forests = await Forest.find();
    res.json(forests);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Get forest by ID
// ---------------------
router.get('/:id', async (req, res, next) => {
  try {
    const forest = await Forest.findById(req.params.id);
    if (!forest) {
      const error = new Error('Forest not found');
      error.status = 404;
      throw error;
    }
    res.json(forest);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Update forest
// ---------------------
router.put('/:id', auth, async (req, res, next) => {
  try {
    if (req.body.region && !VALID_REGIONS.includes(req.body.region)) {
      const error = new Error(`Invalid region. Must be one of: ${VALID_REGIONS.join(', ')}`);
      error.status = 400;
      throw error;
    }

    const forest = await Forest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!forest) {
      const error = new Error('Forest not found');
      error.status = 404;
      throw error;
    }
    res.json({ message: 'Updated', forest });
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Delete forest
// ---------------------
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const forest = await Forest.findByIdAndDelete(req.params.id);
    if (!forest) {
      const error = new Error('Forest not found');
      error.status = 404;
      throw error;
    }
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
