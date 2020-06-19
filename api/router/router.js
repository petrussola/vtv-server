// dependencies
const express = require('express');

// router
const router = express.Router();

// data
const data = require('../../data/data');

router.post('/', (req, res) => {
	const { age } = req.body;
	res.status(200).json({ data: data[age] });
});

module.exports = router;
