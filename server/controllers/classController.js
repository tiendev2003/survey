const { Department } = require("../models");
const Class = require("../models/Class");
const { errorResponse, successResponse } = require("../utils/response");

exports.createClass = async (req, res) => {
  const { name, department_id } = req.body;

  try {
    const classroom = await Class.create({ name, department_id });
    successResponse(res, "Class created successfully", classroom);
  } catch (err) {
    errorResponse(res, "Failed to create class", err.message, 500);
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.findAll({
      include: [{ model: Department, as: 'department' }],
    });
    successResponse(res, "Classes retrieved successfully", classes);
  } catch (err) {
    errorResponse(res, "Failed to retrieve classes", err.message, 500);
  }
};
