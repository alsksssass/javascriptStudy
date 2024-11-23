/*
Chapter 47

### 문제 1
커스텀 에러 클래스를 만들고, 적절한 에러 처리 예제를 구현하세요.

*/

// Your solution

function customError(num){
	try{
		if(!Number.isInteger(num)) throw new Error('error type');
		console.log(num, 'is  number');
	}
	catch(error){
		console.log('it is not number');
	}
}

console.log(customError(123));
console.log(customError('a'));