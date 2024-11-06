const obj = {
	[Symbol('asdf')]: 1,
	getAsdf() {
		return this[Object.getOwnPropertySymbols(this)[0]];
	}
}

for (const key in obj) {
	console.log(key);
}

console.log(Object.keys(obj), Object.getOwnPropertyNames(obj));

console.log(obj.getAsdf());