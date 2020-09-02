const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

class ItemTypes {

	constructor() {

	}

	async getItems() {
		const items = await readFile(this.datafile, "utf8");
		return JSON.parse(items);
	}

	getMethodNameFromIdCode(idCode) {
		return 'get' + idCode.charAt(0).toUpperCase() + idCode.slice(1);
	}

	async getData(idCodes) {
		const data = {};
		for (const idCode of idCodes) {
			const methodName = this.getMethodNameFromIdCode(idCode);
			data[idCode] = await this[methodName]();
		}
		return data;
	}

	async getIds() {
		const items = await this.getItems();
		return items.map(item => item.id);
	}

	async getRandomItem() {
		const items = await this.getItems();
		const randomIndex = Math.floor(Math.random() * items.length);
		return items[randomIndex];
	}
}

module.exports = ItemTypes