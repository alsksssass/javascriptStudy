/*
Chapter 46

### 문제 1
제너레이터를 사용하여 피보나치 수열을 생성하는 함수를 구현하세요.

*/

// Your solution
function* fiboGenerator() {
	let [prev, cur] = [0, 1];
	while (true) {
		[prev, cur] = [cur, prev + cur];
		yield cur;
	}
}

const fib = fiboGenerator();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
