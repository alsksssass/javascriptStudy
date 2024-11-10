/*
Chapter 35

### 문제 2
객체를 깊은 복사하는 함수를 스프레드 문법을 사용하여 구현하세요.

*/

// Your solution
function TrueCopy(target){
	return {...target};
}

const test = {sabyun:'ddong'};
const test2 = TrueCopy(test);
test.sabyun = 'change';

console.log(test.sabyun);
console.log(test2.sabyun);