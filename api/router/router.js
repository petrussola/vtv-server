// dependencies
const express = require('express');

// router
const router = express.Router();

// controllers
const { fetchQuestions } = require('../controller/questions');

router.post('/', fetchQuestions);

module.exports = router;
