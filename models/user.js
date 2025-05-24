const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bloodType: {
    type: String,
    required: true, // Example: A+, O-, etc.
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
  lastDonationDate: {
    type: Date,
  },
  donationsMade: {
    type: Number,
    default: 0,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
