// models/Forest.js

const mongoose = require('mongoose');

const forestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true },
  treeTypes: { type: [String], default: [] },
  datePlanted: { type: Date, required: true, default: Date.now }, // ✅ default added
  status: { type: String, enum: ['Healthy','Diseased','Dead'], default: 'Healthy' },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  images: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Forest', forestSchema);
