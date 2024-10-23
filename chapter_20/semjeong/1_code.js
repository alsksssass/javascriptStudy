function example() {
  x = 10; // 암묵적 전역을 만들지만 참조하지는 않아 에러 발생 x
  delete Object.prototype;
  function inner() {}
  // 함수 삭제 -> SyntaxError
  delete inner;
}

function corrected() {
  'use strict';
  x = 10;
  delete Object.prototype;
  function inner() {}
}