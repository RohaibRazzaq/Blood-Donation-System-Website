const bloodRequestService = require("../Services/BloodRequestService");

// Create a new blood request
exports.createBloodRequest = async (req, res) => {
  try {
    const request = await bloodRequestService.createBloodRequest(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all blood requests
exports.getBloodRequests = async (req, res) => {
  try {
    const requests = await bloodRequestService.getBloodRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get blood request by ID
exports.getBloodRequestById = async (req, res) => {
  try {
    const request = await bloodRequestService.getBloodRequestById(
      req.params.id
    );
    if (!request) {
      return res.status(404).json({ message: "Blood request not found" });
    }
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update blood request
exports.updateBloodRequest = async (req, res) => {
  try {
    const request = await bloodRequestService.updateBloodRequest(
      req.params.id,
      req.body
    );
    if (!request) {
      return res.status(404).json({ message: "Blood request not found" });
    }
    res.json(request);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete blood request
exports.deleteBloodRequest = async (req, res) => {
  try {
    const request = await bloodRequestService.deleteBloodRequest(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Blood request not found" });
    }
    res.json({ message: "Blood request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get blood requests by status
exports.getBloodRequestsByStatus = async (req, res) => {
  try {
    const requests = await bloodRequestService.getBloodRequestsByStatus(
      req.params.status
    );
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
