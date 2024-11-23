/*
Chapter 46

### 문제 1
제너레이터를 사용하여 피보나치 수열을 생성하는 함수를 구현하세요.

*/

// Your solution

function* fivo(){
	let cur = 1;
	let pre = 0;
	while(1){
		[pre,cur] = [cur, cur + pre];
		yield cur;
	}
}
const f = fivo();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());