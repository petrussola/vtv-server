// data
const data = require('../../data/data');

function fetchQuestions(req, res) {
	const { age } = req.body;
	// focus on the difficulty of questions
	const originalQuestions = data[age];
	// initialize array that will be returned with the 10 random questions
	const fetchedQuestions = [];

	const takenItems = {};
	// get 10 random questions
	for (let i = 0; i < 10; i++) {
		let idx = Math.floor(Math.random() * originalQuestions.length);
		while (takenItems[idx]) {
			idx = Math.floor(Math.random() * originalQuestions.length);
		}
		fetchedQuestions.push(originalQuestions[idx]);
		takenItems[idx] = true;
	}
	res.status(200).json({ data: fetchedQuestions });
}
module.exports = { fetchQuestions };
