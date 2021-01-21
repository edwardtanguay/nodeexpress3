const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const routes = require('./public/routes');

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

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.use('/', routes(config));

app.listen(port, () => {
	console.log(`app listening at: http://localhost:${port}`);
});
