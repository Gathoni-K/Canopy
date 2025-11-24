//routes/forest.js

const express = require('express');
const router = express.Router();
const Forest = require('../models/Forest');
const jwt = require('jsonwebtoken');
const { VALID_REGIONS } = require('../constants');

// ---------------------
// Auth middleware
// ---------------------
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ','');
    if (!token) throw Object.assign(new Error("No token, authorization denied"), { status: 401 });

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
    const { name, region, treeTypes, datePlanted, status, coordinates, images } = req.body;
    if (!name || !region || !treeTypes || !coordinates || !datePlanted) {
      throw Object.assign(
        new Error("Name, region, treeTypes, coordinates, and datePlanted are required"),
        { status: 400 }
      );
    }

    if (!VALID_REGIONS.includes(region)) {
      throw Object.assign(
        new Error(`Invalid region. Must be one of: ${VALID_REGIONS.join(', ')}`),
        { status: 400 }
      );
    }

    const forest = new Forest({ name, region, treeTypes, datePlanted, status, coordinates, images });
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
    if (!forest) throw Object.assign(new Error('Forest not found'), { status: 404 });
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
      throw Object.assign(
        new Error(`Invalid region. Must be one of: ${VALID_REGIONS.join(', ')}`),
        { status: 400 }
      );
    }

    const forest = await Forest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!forest) throw Object.assign(new Error('Forest not found'), { status: 404 });
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
    if (!forest) throw Object.assign(new Error('Forest not found'), { status: 404 });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
