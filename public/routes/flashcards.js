const express = require('express');
const router = express.Router();

const Flashcards = require('../itemTypes/itemTypeFlashcards.js');
const ItemTypeFlashcards = require('../itemTypes/itemTypeFlashcards.js');

module.exports = () => {
	router.get('/', (req, res) => {
		const itemTypeFlashcards = new ItemTypeFlashcards();
		itemTypeFlashcards.getData(['items', 'capitalizedCategories', 'ids', 'pageTitle'])
			.then(data => res.render('pages/flashcards', { data: data }));

	});
	router.get('/:id', (req, res) => {
		return res.send(`detail page of flashcard "${req.params.id}"`);
	});
	return router;
}