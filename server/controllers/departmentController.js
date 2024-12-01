const Department = require("../models/Department");
const { successResponse, errorResponse } = require("../utils/response");

exports.createDepartment = async (req, res) => {
  const { name } = req.body;

  try {
    const department = await Department.create({ name });
    successResponse(res, "Department created successfully", department);
  } catch (err) {
    errorResponse(res, "Failed to create department", err.message, 500);
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    successResponse(res, "Departments retrieved successfully", departments);
  } catch (err) {
    errorResponse(res, "Failed to retrieve departments", err.message, 500);
  }
};
