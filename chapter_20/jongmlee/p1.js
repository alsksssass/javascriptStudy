//다음 코드를 strict mode로 실행했을 때 어떤 에러가 발생하는지 설명하고, 이를 수정하세요:

/*
function example() {
	'use strict'
  x = 10;
  delete Object.prototype;
  function inner() {}
  delete inner;
}
*/

// delete inner 부분에서 SyntaxError: Delete of an unqualified identifier in strict mode 발생
// 이는 delete 연산자로 변수, 함수, 매개변수를 삭제할 시 발생하는 신택스에러다.
// 따라서 스트릭트 모드에서는 변수, 함수, 매개변수를 delete해선 안됨.
