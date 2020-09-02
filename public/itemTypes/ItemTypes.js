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
		if (!idCode.includes('(')) {
			return ['get' + idCode.charAt(0).toUpperCase() + idCode.slice(1), idCode, []]
		} else {
			// TODO: refactor to make more flexible
			var regExp = /\(([^)]+)\)/;
			var matches = regExp.exec(idCode);
			const strNum = matches[1];
			const num = parseInt(strNum);
			return ['getItem', 'item', [num]];
		}
	}

	async getData(idCodes) {
		const data = {};
		for (const idCode of idCodes) {
			const [methodName, finalIdCode, params] = this.getMethodNameFromIdCode(idCode);
			data[finalIdCode] = await this[methodName](...params);
		}
		return data;
	}

	async getIds() {
		const items = await this.getItems();
		return items.map(item => item.id);
	}

	async getRandomItem() {
		const items = await this.getItems();
		let randomIndex = Math.floor(Math.random() * items.length);
		return items[randomIndex];
	}

	async getItem(id) {
		const items = await this.getItems();
		return items.find(item => item.id === id);
	}
}

module.exports = ItemTypes