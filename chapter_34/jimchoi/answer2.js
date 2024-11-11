/*
Chapter 34

### 문제 2
무한 피보나치 수열을 생성하는 이터레이터를 구현하세요.
그냥 피보나치 수열 생성 이터레이터 구현함
*/

// Your solution 

const fibonacci = (max)=>{
	let [pre, cur] = [0, 1];
	return {[Symbol.iterator]() {return this;},
	next() {
		[pre, cur] = [cur, pre + cur];
		return { value : cur, done: cur >= max};
	}
	};
};

let iter =fibonacci(10);

for (const num of iter) {
	console.log(num);
}
