const mongoose = require("mongoose");

const donationRecordSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donor",
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number, // In milliliters (ml)
    required: true,
  },
  bloodType: {
    type: String,
    required: true, // Same blood type as the donor
  },
});

const DonationRecord = mongoose.model("DonationRecord", donationRecordSchema);

module.exports = DonationRecord;
