const obj = {
	get [Symbol.toStringTag]() {
		return "my obj"
	},
	[Symbol.toPrimitive](hint) {
		if (hint === 'number')
			return 42;
		return null;
	}
}

console.log(Object.prototype.toString.call(obj));
console.log(+obj);