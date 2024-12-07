const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Question = sequelize.define(
  "Question",
  {
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    question_type: {
      type: DataTypes.ENUM("text", "multiple_choice", "rating", "boolean"),
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "draft", "inactive"),
      defaultValue: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Question;
