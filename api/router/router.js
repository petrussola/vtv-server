// dependencies
const express = require('express');

// router
const router = express.Router();

// controllers
const { fetchQuestions, fetchNovetats } = require('../controller/questions');

router.post('/', fetchQuestions);
router.get('/novetats', fetchNovetats);

module.exports = router;
