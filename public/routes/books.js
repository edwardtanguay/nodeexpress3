const express = require('express');
const router = express.Router();

module.exports = () => {
	router.get('/', (req, res) => {
		return res.send('this will be the book page');
	});
	router.get('/:idCode', (req, res) => {
		return res.send(`detail page of book "${req.params.idCode}"`);
	});
	return router;
}