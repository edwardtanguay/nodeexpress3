const express = require('express');
const router = express.Router();

const booksRoute = require('./books');

module.exports = () => {
	router.get('/', (req, res) => {
		res.render('pages/index', { pageTitle: 'The Main Page' });
	});
	router.get('/info', (req, res) => {
		res.render('pages/info', { pageTitle: 'Info' });
	});

	router.use('/books', booksRoute());
	return router;
}