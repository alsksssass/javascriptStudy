/*
Chapter 34

### 문제 1
range 함수를 구현하세요. 시작값과 끝값을 받아 순회하세요.

*/

// Your solution

function range(start, end) {
	return {
		[Symbol.iterator]() {
			let cur = start;
			return {
				next() {
					return cur <= end ? {value : cur++, done : false} : {done : true};
				}
			}
		}
	}
}

for (let n of range(1, 10)) {
	console.log(n);
}