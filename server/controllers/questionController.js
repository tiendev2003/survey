const { Question, Option } = require("../models");
const { successResponse, errorResponse } = require("../utils/response");

exports.createQuestion = async (req, res) => {
  const { question_text, question_type, options } = req.body;

  try {
    const question = await Question.create({
      question_text,
      question_type,
      created_by: req.user.id,
    });

    if (question_type === "multiple_choice" && Array.isArray(options)) {
      const optionData = options.map((option) => ({
        question_id: question.id,
        option_text: option,
      }));
      await Option.bulkCreate(optionData);
    }

    successResponse(res, "Question created successfully", question);
  } catch (err) {
    errorResponse(res, "Failed to create question", err.message, 500);
  }
};

exports.getQuestions = async (req, res) => {
  try {
    if (req.user == undefined) {
      return errorResponse(
        res,
        "Unauthorized",
        "You are not authorized to perform this action",
        403
      );
    }
    const questions = await Question.findAll({
      include: [{ model: Option, as: "options" }],
    });

    successResponse(res, "Questions retrieved successfully", questions);
  } catch (err) {
    errorResponse(res, "Failed to retrieve questions", err.message, 500);
  }
};

exports.editQuestion = async (req, res) => {
  const { question_text, question_type, options } = req.body;
  const { id } = req.params;

  try {
    const question = await Question.findByPk(id);

    if (!question) {
      return errorResponse(
        res,
        "Question not found",
        "Question not found",
        404
      );
    }

    await question.update({
      question_text,
      question_type,
    });

    if (question_type === "multiple_choice" && Array.isArray(options)) {
      await Option.destroy({ where: { question_id: id } });

      const optionData = options.map((option) => ({
        question_id: id,
        option_text: option,
      }));
      await Option.bulkCreate(optionData);
    }

    successResponse(res, "Question updated successfully", question);
  } catch (err) {
    errorResponse(res, "Failed to update question", err.message, 500);
  }
};

exports.deleteQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findByPk(id);

    if (!question) {
      return errorResponse(
        res,
        "Question not found",
        "Question not found",
        404
      );
    }

    await question.destroy();

    successResponse(res, "Question deleted successfully");
  } catch (err) {
    errorResponse(res, "Failed to delete question", err.message, 500);
  }
};

exports.getQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findByPk(id, {
      include: [{ model: Option, as: "options" }],
    });

    if (!question) {
      return errorResponse(
        res,
        "Question not found",
        "Question not found",
        404
      );
    }

    successResponse(res, "Question retrieved successfully", question);
  } catch (err) {
    errorResponse(res, "Failed to retrieve question", err.message, 500);
  }
};