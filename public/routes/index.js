const express = require('express');
const flashcardsRoute = require('./flashcards');

const router = express.Router();

module.exports = config => {
	router.get('/', (req, res) => {
		res.render('pages/index', { pageTitle: config.appTitle });
	});
	router.get('/info', (req, res) => {
		res.render('pages/info', { pageTitle: 'Info', htmlText: 'this is <b>bold</b> text' });
	});

	router.use('/flashcards', flashcardsRoute());
	return router;
}