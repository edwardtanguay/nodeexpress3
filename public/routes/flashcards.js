const express = require('express');
const router = express.Router();

const Flashcards = require('../itemTypes/itemTypeFlashcards.js');
const ItemTypeFlashcards = require('../itemTypes/itemTypeFlashcards.js');

module.exports = () => {
	router.get('/', (req, res) => {
		const itemTypeFlashcards = new ItemTypeFlashcards();
		itemTypeFlashcards.getData(['items', 'capitalizedCategories', 'ids', 'pageTitle', 'randomItem'])
			.then(data => res.render('pages/flashcards', { data: data }));
	});
	router.get('/:id', (req, res) => {
		const itemTypeFlashcards = new ItemTypeFlashcards();
		itemTypeFlashcards.getData(['pageTitle', `getItem(${req.params.id})`])
			.then(data => {
				data.pageTitle = 'Flashcard ';
				res.render('pages/flashcard', { data: data });
			});
	});
	return router;
}