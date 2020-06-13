// dependencies
const express = require('express');

// router
const router = express.Router();

// data
const data = require('../../data/data');

router.get('/', (req, res) => {
	res.status(200).json({ data: data.senior });
});

module.exports = router;
