/**
 * 매개변수 기본값, Rest 파라미터, 명명된 매개변수를 활용하여
 *  다양한 옵션을 처리할 수 있는 함수를 작성하세요.
 */

const testRest1 = function (...rest) {
  console.log(rest);
};

// function testRest1(...rest = []) { //  못씀
// 	console.log(rest);
// }
const testRest2 = function (a, b, ...rest) {
  console.log(rest);
};

testRest1(1, 2, 3, 4, 5);
console.log(testRest1.length);
testRest2(1, 2, 3, 4, 5);
console.log(testRest2.length);
