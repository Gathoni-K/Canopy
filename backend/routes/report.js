//routes/report.js

const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const jwt = require('jsonwebtoken');
const { VALID_REGIONS } = require('../constants');

// ---------------------
// Auth middleware
// ---------------------
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ','');
    if (!token) throw Object.assign(new Error("No token, authorization denied"), { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    next(err);
  }
};

// ---------------------
// Create report
// ---------------------
router.post('/', auth, async (req, res, next) => {
  try {
    const { type, description, location, image } = req.body;
    if (!type || !description || !location || !location.region || location.lat == null || location.lng == null) {
      throw Object.assign(
        new Error("Type, description, location.region, location.lat, and location.lng are required"),
        { status: 400 }
      );
    }

    if (!VALID_REGIONS.includes(location.region)) {
      throw Object.assign(
        new Error(`Invalid region. Must be one of: ${VALID_REGIONS.join(', ')}`),
        { status: 400 }
      );
    }

    const report = new Report({ type, description, location, image, user: req.user });
    await report.save();
    res.status(201).json({ message: "Report submitted", report });
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Filter reports
// ---------------------
router.get('/filter', async (req, res, next) => {
  try {
    const { category, region } = req.query;
    const filter = {};
    if (category) filter.type = category;
    if (region && !VALID_REGIONS.includes(region)) {
      throw Object.assign(
        new Error(`Invalid region filter. Must be one of: ${VALID_REGIONS.join(', ')}`),
        { status: 400 }
      );
    }
    if (region) filter['location.region'] = region;

    const reports = await Report.find(filter).populate('user', 'username email');
    res.json(reports);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Get all reports
// ---------------------
router.get('/', async (req, res, next) => {
  try {
    const reports = await Report.find().populate('user', 'username email');
    res.json(reports);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Get report by ID
// ---------------------
router.get('/:id', async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id).populate('user', 'username email');
    if (!report) throw Object.assign(new Error("Report not found"), { status: 404 });
    res.json(report);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
