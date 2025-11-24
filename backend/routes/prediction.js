// routes/prediction.js

const express = require('express');
const router = express.Router();
const Forest = require('../models/Forest');
const Report = require('../models/Report');
const { VALID_REGIONS } = require('../constants');

// ---------------------
// GET /prediction/:region — forecast
// ---------------------
router.get('/:region', async (req, res, next) => {
  try {
    const { region } = req.params;

    // Validate presence of region parameter
    if (!region) {
      const error = new Error("Region parameter is required");
      error.status = 400;
      throw error;
    }

    // Validate that region is in the predefined list
    if (!VALID_REGIONS.includes(region)) {
      const error = new Error(`Invalid region. Must be one of: ${VALID_REGIONS.join(', ')}`);
      error.status = 400;
      throw error;
    }

    // Fetch forests in the given region
    const forests = await Forest.find({ region });

    // No forests found → return 0 coverage
    if (!forests.length) {
      return res.json({
        region,
        currentCoverage: 0,
        predictedCoverage: 0
      });
    }

    // Count healthy trees
    const healthyTrees = forests.filter(f => f.status === 'Healthy').length;

    // Step 1: Simple growth (+10%)
    let predicted = healthyTrees * 1.1;

    // Step 2: Count recent logging reports (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentLogging = await Report.countDocuments({
      "location.region": region,
      type: "Logging",
      date: { $gte: thirtyDaysAgo }
    });

    // Step 3: Adjust prediction based on logging
    predicted -= recentLogging;

    // Step 4: Ensure non-negative and round
    predicted = Math.max(Math.round(predicted), 0);

    // Send response
    res.json({
      region,
      currentCoverage: healthyTrees,
      predictedCoverage: predicted
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;
