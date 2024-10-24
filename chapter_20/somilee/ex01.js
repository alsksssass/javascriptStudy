'use strict';

function example() {
   let  x = 10; // 암묵적 전역, 근데 왜 오류 안나지
    //delete Object.prototype; // 내장 객체 속성 삭제
    function inner() {}
    //delete inner; // 함수 삭제
}