function example() {
	x = 10; // 선언되지 않은 변수 참조
	delete Object.prototype; // 재정의할 수 없는 프로퍼티 삭제 
	function inner() {} 
	delete inner; // 함수 삭제 불가능
  }



function example() {
	const x = 10; // 선언되지 않은 변수 참조
	// delete Object.prototype; // 재정의할 수 없는 프로퍼티 삭제 
	function inner() {} 
	// delete inner; // 함수 삭제 불가능
  }