const express = require('express');
const path = require('path');
const routes = require('./public/routes');

const config = {
	'appTitle': 'Node.js/Express Manual Site'
}

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.use('/', routes(config));

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});
