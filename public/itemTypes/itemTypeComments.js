const { writeFile } = require('fs');
const path = require('path');
const ItemTypes = require('./ItemTypes');

class ItemTypeComments extends ItemTypes {
	constructor() {
		super();

		this.datafile = path.join(__dirname, '../data/comments.json');
	}

	async addComment(body, author) {
		const items = (await this.getItems());
		console.log('incomments');
		console.log(body);
		items.unshift({ body, author });
		return writeFile(this.datafile, JSON.stringify(items), () => {
			console.log('updated file');
		});
	}
}

module.exports = ItemTypeComments;