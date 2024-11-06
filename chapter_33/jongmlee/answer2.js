/*
Chapter 33

### 문제 2
Symbol.iterator를 구현하여 커스텀 이터러블 객체를 만드세요. 피보나치 수열을 생성하는 이터러블 객체를 구현해보세요.

*/

// Your solution

function fibonacci(limit) {
	let [a, b, count] = [0, 1, 0];
	return {
	[Symbol.iterator]() {
		return {
			next: () => {
				if (count++ >= limit) {
					return { done: true };
				}
				[a, b] = [b, a + b];
				return { value: a, done: false };
			}
		};
	}
	};
}

for (let num of fibonacci(20)) {
	console.log(num);
}