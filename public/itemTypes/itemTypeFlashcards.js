const path = require('path');
const ItemTypes = require('./ItemTypes');

class ItemTypeFlashcards extends ItemTypes {

	constructor() {
		super();

		this.datafile = path.join(__dirname, '../data/flashcards.json');
	}

	async getPageTitle() {
		return 'Flashcards';
	}

	async getCapitalizedCategories() {
		const items = await this.getItems();
		return items.map(m => m.category.toUpperCase());
	}

}

module.exports = ItemTypeFlashcards;