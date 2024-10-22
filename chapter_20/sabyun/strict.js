function example() {
	'use strict'
	let x = 10; //변수 앞에 let const var 사용 미사용시 암묵적 전역변수됨.
	//delete Object.prototype;  자바스크립트 내장 객체 삭제불가
	function inner() {}
	//delete inner; 함수삭제 불가.
}

example();
