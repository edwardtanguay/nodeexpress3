const express = require('express');
const router = express.Router();

module.exports = () => {
	router.get('/', (req, res) => {
		res.render('pages/flashcards', { pageTitle: 'Flashcards' });
	});
	router.get('/:id', (req, res) => {
		return res.send(`detail page of flashcard "${req.params.id}"`);
	});
	return router;
}