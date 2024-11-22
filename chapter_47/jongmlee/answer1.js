/*
Chapter 47

### 문제 1
커스텀 에러 클래스를 만들고, 적절한 에러 처리 예제를 구현하세요.

*/

// Your solution

class CustomEerror extends Error {
	constructor(message, code) {
		super(message);
		this.name = "CustomError";
		this.code = code;
	}
}

function f() {
	throw new CustomEerror("custom error occured!!", 404);
}

try {
	f();
} catch (e) {
	console.log(e.message + "\nerror code is " + e.code);
}