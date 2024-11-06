const fibonacci = {
	[Symbol.iterator]() {
		let cur = 1, prev = 1, idx = 1;
		const max = 5;
		return {
			next() {
				const value = cur + prev;
				prev = cur;
				cur = value;
				return { value, done: idx++ > max };
			}
		};
	}
}

for (let i of fibonacci) {
	console.log(i);
}