const hospitalService = require("../services/hospitalService");

// Create a new hospital
exports.createHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.createHospital(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all hospitals
exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await hospitalService.getHospitals();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get hospital by ID
exports.getHospitalById = async (req, res) => {
  try {
    const hospital = await hospitalService.getHospitalById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    res.json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update hospital
exports.updateHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.updateHospital(
      req.params.id,
      req.body
    );
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    res.json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete hospital
exports.deleteHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.deleteHospital(req.params.id);
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    res.json({ message: "Hospital deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
