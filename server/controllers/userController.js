const { User, Department, Class } = require("../models");
const { errorResponse, successResponse } = require("../utils/response");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    successResponse(res, "User all", users);
  } catch (error) {
    errorResponse(res, "Failed to create survey", error.message, 500);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Class,
          as: "class",
 
        },
      ],
    });
    if (!user) {
      return errorResponse(res, "User not found", null, 404);
    }
    successResponse(res, "User detail", user);
  } catch (error) {
    errorResponse(res, "Failed to get user detail", error.message, 500);
  }
};
