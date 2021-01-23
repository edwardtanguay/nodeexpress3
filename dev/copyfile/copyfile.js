const fsp = require('fs').promises;

fsp.copyFile('copyfilex.js', 'copyfile.js.bak')
	.then(() => console.log('file is copied'))
	.catch(() => console.log('error occured'));

console.log('execution continues');