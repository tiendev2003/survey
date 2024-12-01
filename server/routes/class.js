const express = require('express');

const { createClass, getClasses } = require('../controllers/classController');

const router = express.Router();

router.post('/', createClass);
router.get('/', getClasses);

module.exports = router;