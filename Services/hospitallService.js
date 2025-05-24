const Hospital = require("../models/hospital");

class HospitalService {
  // Create a new hospital
  async createHospital(hospitalData) {
    const hospital = new Hospital(hospitalData);
    return await hospital.save();
  }

  // Get all hospitals
  async getHospitals() {
    return await Hospital.find();
  }

  // Get hospital by ID
  async getHospitalById(id) {
    return await Hospital.findById(id);
  }

  // Update hospital
  async updateHospital(id, updateData) {
    return await Hospital.findByIdAndUpdate(id, updateData, { new: true });
  }

  // Delete hospital
  async deleteHospital(id) {
    return await Hospital.findByIdAndDelete(id);
  }
}

module.exports = new HospitalService();
