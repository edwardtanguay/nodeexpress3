const fs = require("fs");
const { promisify } = require("util");

const path = require("path");

const readFile = promisify(fs.readFile);

class ItemTypeFlashcards {

	constructor() {
		this.datafile = path.join(__dirname, '../data/flashcards.json');
	}

	async getItems() {
		const items = await readFile(this.datafile, "utf8");
		return JSON.parse(items);
	}
}

module.exports = ItemTypeFlashcards;