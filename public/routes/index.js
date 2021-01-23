const express = require('express');
const flashcardsRoute = require('./flashcards');
const ItemTypeComments = require('../itemTypes/itemTypeComments.js');

const router = express.Router();

module.exports = config => {
	router.get('/', (req, res) => {
		res.render('layout/main', { pageTitle: config.appTitle, pageIdCode: "index" });
	});
	router.get('/info', (req, res) => {
		res.render('layout/main', { pageTitle: config.appTitle, htmlText: 'this is <b>bold</b> text', pageIdCode: "info" });
	});
	router.get('/comments', (req, res) => {
		const itemTypeComments = new ItemTypeComments();
		itemTypeComments.getData(['items'])
			.then(data => res.render('layout/main', { pageTitle: config.appTitle, data, pageIdCode: "comments" }));
	});

	router.use('/flashcards', flashcardsRoute(config));
	return router;
}