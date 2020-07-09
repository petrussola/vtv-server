// data
const questions = require('../../data/data');
const novetats = require('../../data/novetats');

async function fetchQuestions(req, res) {
	try {
		const { age } = req.body;
		// focus on the difficulty of questions
		const originalQuestions = questions[age];
		// initialize array that will be returned with the 10 random questions
		let fetchedQuestions = [];

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
		// fall back in case, for some reason, the returned array of questions is > 10
		if (fetchedQuestions.length > 10) {
			fetchedQuestions = [];
			for (let i = 0; i < 10; i++) {
				fetchedQuestions.push(originalQuestions[i]);
			}
		}
		res.status(200).json({ data: fetchedQuestions });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

function fetchNovetats(req, res) {
	res.status(200).json({ data: novetats });
}
module.exports = { fetchQuestions, fetchNovetats };
