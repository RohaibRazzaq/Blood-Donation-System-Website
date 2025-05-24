const User = require("../models/user");

class UserService {
  // Create a new user
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  // Get all users
  async getUsers() {
    return await User.find();
  }

  // Get user by ID
  async getUserById(id) {
    return await User.findById(id);
  }

  // Update user
  async updateUser(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }

  // Delete user
  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }

  // Get users by blood type
  async getUsersByBloodType(bloodType) {
    return await User.find({ bloodType });
  }
}

module.exports = new UserService();
