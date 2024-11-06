/*
Chapter 33

### 문제 2
Symbol.iterator를 구현하여 커스텀 이터러블 객체를 만드세요. 피보나치 수열을 생성하는 이터러블 객체를 구현해보세요.

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

for(const num of fibonacci) {

	console.log(num); // 1 2 3 5 8 
}