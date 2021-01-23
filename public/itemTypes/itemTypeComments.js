const path = require('path');
const ItemTypes = require('./ItemTypes');

class ItemTypeComments extends ItemTypes {
	constructor() {
		super();

		this.datafile = path.join(__dirname, '../data/comments.json');
	}
}

module.exports = ItemTypeComments;