/*
Chapter 34

### 문제 2
무한 피보나치 수열을 생성하는 이터레이터를 구현하세요.

*/

// Your solution

function infiniteFiboacci() {
	[pre, cur] = [0, 1];

	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			[pre, cur] = [cur, pre + cur];
			return {value : cur};
		}
	}
}

for (const n of infiniteFiboacci()) {
	if (n > 100000) break;
	console.log(n);
}