const express = require('express');

const router = express.Router();

const questionController = require('../controllers/questionController');
const { authenticateToken } = require('../middleware/auth');

router.get('/',authenticateToken, questionController.getQuestions);

router.post('/', authenticateToken,questionController.createQuestion);


module.exports = router;