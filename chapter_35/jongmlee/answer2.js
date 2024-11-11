/*
Chapter 35

### 문제 2
객체를 깊은 복사하는 함수를 스프레드 문법을 사용하여 구현하세요.

*/

// Your solution

function myDeepCopy(arr) {
	return {...arr};
}

const t1 = {x : 2, y: 3};
const copied = myDeepCopy(t1);

console.log(t1);
console.log(copied);
console.log(copied === t1);