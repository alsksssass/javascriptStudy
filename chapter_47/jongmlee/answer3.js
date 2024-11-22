/*
Chapter 47

### 문제 3
에러 로깅 시스템을 구현하세요. 발생한 에러를 파일이나 서버에 기록해야 합니다.

*/

// Your solution

errorMap = new Map();

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
	errorMap.set(Date.now(), e.message);
	console.log(errorMap);
}
