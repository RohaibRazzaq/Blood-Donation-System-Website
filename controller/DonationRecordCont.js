const donationRecordService = require("../services/donationRecordService");

// Create a new donation record
exports.createDonationRecord = async (req, res) => {
  try {
    const record = await donationRecordService.createDonationRecord(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all donation records
exports.getDonationRecords = async (req, res) => {
  try {
    const records = await donationRecordService.getDonationRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get donation record by ID
exports.getDonationRecordById = async (req, res) => {
  try {
    const record = await donationRecordService.getDonationRecordById(
      req.params.id
    );
    if (!record) {
      return res.status(404).json({ message: "Donation record not found" });
    }
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update donation record
exports.updateDonationRecord = async (req, res) => {
  try {
    const record = await donationRecordService.updateDonationRecord(
      req.params.id,
      req.body
    );
    if (!record) {
      return res.status(404).json({ message: "Donation record not found" });
    }
    res.json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete donation record
exports.deleteDonationRecord = async (req, res) => {
  try {
    const record = await donationRecordService.deleteDonationRecord(
      req.params.id
    );
    if (!record) {
      return res.status(404).json({ message: "Donation record not found" });
    }
    res.json({ message: "Donation record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get donations by donor
exports.getDonationsByDonor = async (req, res) => {
  try {
    const records = await donationRecordService.getDonationsByDonor(
      req.params.donorId
    );
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get donations by hospital
exports.getDonationsByHospital = async (req, res) => {
  try {
    const records = await donationRecordService.getDonationsByHospital(
      req.params.hospitalId
    );
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
