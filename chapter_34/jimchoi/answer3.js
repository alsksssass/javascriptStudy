/*
Chapter 34

### 문제 3
커스텀 이터러블 객체를 만들어 for...of 문으로 순회하세요.

*/

// Your solution

const fibonacci = {
	[Symbol.iterator]() {
		let [pre, cur] = [0, 1] ;
		const max = 10;
	
		return {
			next() {
				[pre, cur] = [cur, pre + cur];
				return { value : cur, done: cur >= max};
			}
		}
	}
	};

	for (let i of fibonacci) {
		console.log(i);
	}