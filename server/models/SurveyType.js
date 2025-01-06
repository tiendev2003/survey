const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Question = require('./Question'); // Add this line

const SurveyType = sequelize.define('SurveyType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
});

SurveyType.belongsToMany(Question, { through: 'QuestionSurveyTypes', foreignKey: 'survey_type_id' });
Question.belongsToMany(SurveyType, { through: 'QuestionSurveyTypes', foreignKey: 'question_id' });

module.exports = SurveyType;
