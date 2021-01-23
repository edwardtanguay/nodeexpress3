const express = require('express');
const flashcardsRoute = require('./flashcards');

const router = express.Router();

module.exports = config => {
	router.get('/', (req, res) => {
		res.render('layout/main', { pageTitle: config.appTitle, pageIdCode: "index" });
	});
	router.get('/info', (req, res) => {
		res.render('layout/main', { pageTitle: config.appTitle, htmlText: 'this is <b>bold</b> text', pageIdCode: "info" });
	});
	router.get('/comments', (req, res) => {
		res.render('layout/main', { pageTitle: config.appTitle, pageIdCode: "comments" });
	});

	router.use('/flashcards', flashcardsRoute(config));
	return router;
}