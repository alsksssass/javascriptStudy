/*
strict mode에서 this의 동작이 어떻게 변하는지 예제를 들어 설명하세요.

일반 함수로서 호출하면 this 에 undefined가 바인딩된다. 
일반 함수 내부에서는 this를 사용할 수 없다.
*/

function nonStrict() {
	  console.log(this, "nonStrict : window 객체가 출력됨");
}

'use strict';
function strict() {
	console.log(this, "strict : undefined가 출력됨");
}