const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const routes = require('./public/routes');
const httpErrors = require('http-errors');

const config = {
	'appTitle': 'Node.js/Express Manual Site'
}

const app = express();
const port = 3001;

// allows Express to trust cookies passed through a proxy
app.set('trust proxy', 1);

app.use(
	cookieSession({
		"name": "main2",
		"keys": ["wieijsdsdkjsdf", "nxcvkxjvxiuxivuxociv"]
	})
)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

app.use((req, res, next) => {
	res.locals.timeOfPageLoad = new Date().toISOString();
	return next();
});
app.locals.appVersion = "0.23.45";

app.locals.mainFlashcards = [
	{
		"front": "to show",
		"back": "mostrar"
	},
	{
		"front": "to win",
		"back": "ganar"
	},
	{
		"front": "to delete",
		"back": "borrar"
	}
];

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.use('/throw', (req, res, next) => {
	setTimeout(() => {
		// throw new Error('something went wrong')
		return next(new Error('something went wrong'));
	}, 4000);
});

app.use('/', routes(config));

app.use((req, res, next) => {
	return next(httpErrors(404, 'File not found.'));
})

// 404 page
app.use((err, req, res, next) => {
	console.log(err); // log error but don't show to users
	res.locals.message = err.message;
	const status = err.status || 500;
	res.locals.status = status;
	res.status(status);
	res.render('error');
});

app.listen(port, () => {
	console.log(`app listening at: http://localhost:${port}`);
});
