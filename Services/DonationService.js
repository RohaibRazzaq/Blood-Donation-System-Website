const DonationRecord = require("../models/donationRecord");

class DonationRecordService {
  // Create a new donation record
  async createDonationRecord(recordData) {
    const record = new DonationRecord(recordData);
    return await record.save();
  }

  // Get all donation records
  async getDonationRecords() {
    return await DonationRecord.find().populate("donor hospital");
  }

  // Get donation record by ID
  async getDonationRecordById(id) {
    return await DonationRecord.findById(id).populate("donor hospital");
  }

  // Update donation record
  async updateDonationRecord(id, updateData) {
    return await DonationRecord.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("donor hospital");
  }

  // Delete donation record
  async deleteDonationRecord(id) {
    return await DonationRecord.findByIdAndDelete(id);
  }

  // Get donations by donor
  async getDonationsByDonor(donorId) {
    return await DonationRecord.find({ donor: donorId }).populate("hospital");
  }

  // Get donations by hospital
  async getDonationsByHospital(hospitalId) {
    return await DonationRecord.find({ hospital: hospitalId }).populate(
      "donor"
    );
  }
}

module.exports = new DonationRecordService();
