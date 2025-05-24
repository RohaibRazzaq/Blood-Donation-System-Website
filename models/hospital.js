const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availabilityHours: {
    type: String, // Format: "Monday-Friday: 9AM - 5PM"
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
