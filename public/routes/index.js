const express = require('express');
const { check, validationResult } = require('express-validator');
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

		const errors = req.session.feedback ? req.session.feedback : false;
		req.session.feedback = {};

		itemTypeComments.getData(['items'])
			.then(data => res.render('layout/main', {
				pageTitle: config.appTitle,
				data,
				pageIdCode: "comments",
				errors
			}));
	});
	router.post('/feedback', [
		check('body')
			.trim()
			.isLength({ min: 3 })
			.escape()
			.withMessage('A comment is required'),
		check('author')
			.trim()
			.isLength({ min: 3 })
			.escape()
			.withMessage('A name is required')
	], async (req, res) => {
		// const errors = validationResult(req);
		/*
		TODO: get form valiation to work
	console.log(errors.array());
	if (!errors.isEmpty()) {
		req.session.feedback = {
			errors: errors.array()
		};
		res.render('layout/main', {
			pageTitle: config.appTitle,
			pageIdCode: "comments",
			data: [],
			errors: errors.array()
		});
		//return res.redirect('/comments');
	}
	*/
		const itemTypeComments = new ItemTypeComments();
		const { body, author } = req.body;
		await itemTypeComments.addComment(body, author);
		req.session.feedback = {
			message: "Thanks"
		}
		return res.redirect('/comments');
	});

	router.use('/flashcards', flashcardsRoute(config));
	return router;
}