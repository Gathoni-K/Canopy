const express = require("express");
const router = express.Router();
const Forest = require("../models/Forest");
const Report = require("../models/Report");

// ---------------------
// Reports per region
// ---------------------
router.get("/region-trends", async (req, res, next) => {
  try {
    const data = await Report.aggregate([
      { $group: { _id: "$location.region", count: { $sum: 1 } } }
    ]);
    const result = Object.fromEntries(data.map(d => [d._id, d.count]));
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Reports per month
// ---------------------
router.get("/monthly-reports", async (req, res, next) => {
  try {
    const data = await Report.aggregate([
      { $group: { _id: { $month: "$date" }, count: { $sum: 1 } } }
    ]);

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const result = {};
    data.forEach(d => { result[months[d._id - 1]] = d.count });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Tree survival percentage per region
// ---------------------
router.get("/tree-survival", async (req, res, next) => {
  try {
    const data = await Forest.aggregate([
      { 
        $group: { 
          _id: "$region",
          total: { $sum: 1 },
          healthy: { $sum: { $cond: [{ $eq: ["$status", "Healthy"] }, 1, 0] } }
        }
      }
    ]);

    const result = {};
    data.forEach(d => {
      result[d._id] = Math.round((d.healthy / d.total) * 100);
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// ---------------------
// Report types distribution
// ---------------------
router.get("/report-types", async (req, res, next) => {
  try {
    const data = await Report.aggregate([
      { $group: { _id: "$type", count: { $sum: 1 } } }
    ]);

    const result = Object.fromEntries(data.map(d => [d._id, d.count]));
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
