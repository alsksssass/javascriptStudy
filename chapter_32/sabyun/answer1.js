/*
Chapter 32

### 문제 1
이메일 주소를 파싱하는 함수를 작성하세요. 정규표현식과 문자열 메서드를 사용하여 사용자 이름, 도메인, 최상위 도메인을 분리하세요.

*/

// Your solution
function mailpaser(str){
	console.log(str,'is');
	return RegExp(/\w+@\w+\.\w+/).test(str);
}
console.log(mailpaser('hoone0802@gmail.com'));
console.log(mailpaser('@@hoone0802gmail.com'));
console.log(mailpaser('hoone0802@gmailcom'));
console.log(mailpaser('hoone0802gmail.com'));
console.log(mailpaser('hoone0802..@gmailcom'));
console.log(mailpaser('hoone0802@@gmail.com'));