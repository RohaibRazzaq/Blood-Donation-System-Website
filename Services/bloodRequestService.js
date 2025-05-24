const BloodRequest = require("../models/bloodrequest");

class BloodRequestService {
  // Create a new blood request
  async createBloodRequest(requestData) {
    const request = new BloodRequest(requestData);
    return await request.save();
  }

  // Get all blood requests
  async getBloodRequests() {
    return await BloodRequest.find().populate("hospital");
  }

  // Get blood request by ID
  async getBloodRequestById(id) {
    return await BloodRequest.findById(id).populate("hospital");
  }

  // Update blood request
  async updateBloodRequest(id, updateData) {
    return await BloodRequest.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("hospital");
  }

  // Delete blood request
  async deleteBloodRequest(id) {
    return await BloodRequest.findByIdAndDelete(id);
  }

  // Get requests by status
  async getBloodRequestsByStatus(status) {
    return await BloodRequest.find({ status }).populate("hospital");
  }
}

module.exports = new BloodRequestService();
