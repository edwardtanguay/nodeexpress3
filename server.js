const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.get('/', (req, res) => {
	res.render('pages/index', { pageTitle: 'The Main Page' });
});

app.get('/info', (req, res) => {
	res.sendFile(path.join(__dirname, './public/info.html'));
});

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});
