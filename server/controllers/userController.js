const { User } = require("../models");
const { errorResponse, successResponse } = require("../utils/response");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    successResponse(res, "User all", users);
  } catch (error) {
    errorResponse(res, "Failed to create survey", error.message, 500);
  }
};
