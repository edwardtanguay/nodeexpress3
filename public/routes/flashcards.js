const express = require('express');
const router = express.Router();

const Flashcards = require('../itemTypes/itemTypeFlashcards.js');
const ItemTypeFlashcards = require('../itemTypes/itemTypeFlashcards.js');

module.exports = () => {
	router.get('/', (req, res) => {
		const itemTypeFlashcards = new ItemTypeFlashcards();
		itemTypeFlashcards.getItems()
			.then(items => res.render('pages/flashcards', { pageTitle: 'Flashcards', items: items }));

	});
	router.get('/:id', (req, res) => {
		return res.send(`detail page of flashcard "${req.params.id}"`);
	});
	return router;
}