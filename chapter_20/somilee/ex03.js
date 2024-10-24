//Q. strict mode에서 this의 동작이 어떻게 변하는지 예제를 들어 설명하세요.

(function () {
    'use strict';
    
    function Foo() {
        console.log(this); // 일반함수로 호출 -> undefined, non strict mode에서는 전역 객체 (window in browser, global in Node.js)를 가리킴 
    }
    foo( );

    function Foo() {
     console.log(this); //생성자함수로 호출 -> Foo
    }
    new Foo();
}());