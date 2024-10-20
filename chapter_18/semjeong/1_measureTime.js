function measureTime(func) {
	const start = Date.now();
	func();
	const end = Date.now();
	return end - start;
}

console.log('time:', measureTime(() => {
	// https://velog.io/@blacktoast/javascript-range%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC
	Array.from({ length: 10 }, (_, i) => {
		Array.from({ length: 10 }, (_, j) => {
			process.stdout.write(i * j + ' ');
		});
	});
	console.log();
	// setTimeout(() => console.log('end'), 5000);
}));