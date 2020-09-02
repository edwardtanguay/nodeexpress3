class Test {

	getItems() {
		return 'items';
	}

	getDynamic(functionName) {
		return this[functionName]();
	}

}

const test = new Test();
console.log(test.getItems());
console.log(test.getDynamic('getItems'));

