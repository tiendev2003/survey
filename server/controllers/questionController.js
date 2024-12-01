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
    console.log(req.user);
    if (req.user == undefined) {
      return errorResponse(
        res,
        "Unauthorized",
        "You are not authorized to perform this action",
        403
      );
    }
    const questions = await Question.findAll({
      include: [{ model: Option }],
    });

    successResponse(res, "Questions retrieved successfully", questions);
  } catch (err) {
    errorResponse(res, "Failed to retrieve questions", err.message, 500);
  }
};
