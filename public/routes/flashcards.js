const express = require('express');
const ItemTypeFlashcards = require('../itemTypes/itemTypeFlashcards.js');

const router = express.Router();

module.exports = config => {
	router.get('/', (req, res) => {
		if (!req.session.visitCount) {
			req.session.visitCount = 0;
		}
		req.session.visitCount += 1;
		console.log(req.session.visitCount);
		const itemTypeFlashcards = new ItemTypeFlashcards();
		itemTypeFlashcards.getData(['items', 'capitalizedCategories', 'ids', 'pageTitle', 'randomItem'])
			.then(data => res.render('layout/main', { pageTitle: config.appTitle, data, visitCount: req.session.visitCount, pageIdCode: "flashcards" }));
	});
	router.get('/:id', (req, res) => {
		const itemTypeFlashcards = new ItemTypeFlashcards();
		itemTypeFlashcards.getData(['pageTitle', `getItem(${req.params.id})`])
			.then(data => {
				data.pageTitle = 'Flashcard ';
				res.render('pages/flashcard', { data });
			});
	});
	return router;
}