'use strict' ;
function example() {
	x = 10; // 선언되지 않은 변수 참조
	delete Object.prototype; // 재정의할 수 없는 프로퍼티 삭제 
	function inner() {} 
	// delete inner; // 함수 삭제 불가능
  }

example();

function example2() {
	const x = 10; // 선언되지 않은 변수 참조
	// delete Object.prototype; // 재정의할 수 없는 프로퍼티 삭제 
	function inner() {} 
	// delete inner; // 함수 삭제 불가능
  }