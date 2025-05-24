const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Fulfilled", "Cancelled"],
    default: "Pending",
  },
});

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);
