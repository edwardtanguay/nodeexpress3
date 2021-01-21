const express = require('express');
const router = express.Router();
const rfr = require('rfr');

const flashcardsRoute = require('./flashcards');

module.exports = (config) => {
	router.get('/', (req, res) => {
		res.render('pages/index', { pageTitle: config.appTitle });
	});
	router.get('/info', (req, res) => {
		res.render('pages/info', { pageTitle: 'Info' });
	});

	router.use('/flashcards', flashcardsRoute());
	return router;
}