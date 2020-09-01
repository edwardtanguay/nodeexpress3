const express = require('express');
const path = require('path');
const router = express.Router();


module.exports = () => {
	router.get('/', (req, res) => {
		res.render('pages/index', { pageTitle: 'The Main Page' });
	});
	router.get('/info', (req, res) => {
		res.render('pages/info', { pageTitle: 'Info' });
	});
	return router;
}