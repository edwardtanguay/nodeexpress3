const express = require('express');
const router = express.Router();

const flashcardsRoute = require('./flashcards');

module.exports = () => {
	router.get('/', (req, res) => {
		res.render('pages/index', { pageTitle: 'The Main Page' });
	});
	router.get('/info', (req, res) => {
		res.render('pages/info', { pageTitle: 'Info' });
	});

	router.use('/flashcards', flashcardsRoute());
	return router;
}