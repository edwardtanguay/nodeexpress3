const express = require('express');
const router = express.Router();
const rfr = require('rfr');

const flashcardsRoute = require('./flashcards');

module.exports = (config) => {
	router.get('/', (req, res) => {
		res.render('pages/index', { pageTitle: config.appTitle });
	});
	router.get('/info', (req, res) => {
		res.render('pages/info', { pageTitle: 'Info', htmlText: 'this is <b>bold</b> text' });
	});

	router.use('/flashcards', flashcardsRoute());
	return router;
}