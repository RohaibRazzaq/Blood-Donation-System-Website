const express = require("express");
const router = express.Router();

// Import controllers
const userController = require("../controllers/userController");
const hospitalController = require("../controllers/hospitalController");
const bloodRequestController = require("../controllers/bloodRequestController");
const donationRecordController = require("../controllers/donationRecordController");

// User routes
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users/blood-type/:bloodType", userController.getUsersByBloodType);

// Hospital routes
router.post("/hospitals", hospitalController.createHospital);
router.get("/hospitals", hospitalController.getHospitals);
router.get("/hospitals/:id", hospitalController.getHospitalById);
router.put("/hospitals/:id", hospitalController.updateHospital);
router.delete("/hospitals/:id", hospitalController.deleteHospital);

// Blood Request routes
router.post("/blood-requests", bloodRequestController.createBloodRequest);
router.get("/blood-requests", bloodRequestController.getBloodRequests);
router.get("/blood-requests/:id", bloodRequestController.getBloodRequestById);
router.put("/blood-requests/:id", bloodRequestController.updateBloodRequest);
router.delete("/blood-requests/:id", bloodRequestController.deleteBloodRequest);
router.get(
  "/blood-requests/status/:status",
  bloodRequestController.getBloodRequestsByStatus
);

// Donation Record routes
router.post("/donation-records", donationRecordController.createDonationRecord);
router.get("/donation-records", donationRecordController.getDonationRecords);
router.get(
  "/donation-records/:id",
  donationRecordController.getDonationRecordById
);
router.put(
  "/donation-records/:id",
  donationRecordController.updateDonationRecord
);
router.delete(
  "/donation-records/:id",
  donationRecordController.deleteDonationRecord
);
router.get(
  "/donation-records/donor/:donorId",
  donationRecordController.getDonationsByDonor
);
router.get(
  "/donation-records/hospital/:hospitalId",
  donationRecordController.getDonationsByHospital
);

module.exports = router;
