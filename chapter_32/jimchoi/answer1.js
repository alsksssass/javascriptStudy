/*
Chapter 32

### 문제 1
이메일 주소를 파싱하는 함수를 작성하세요. 정규표현식과 문자열 메서드를 사용하여 사용자 이름, 도메인, 최상위 도메인을 분리하세요.

*/

// Your solution

const parseEmail = (email)=> {
	const result = {};

	const rexExp = /^([0-9a-zA-Z][-_\.]?[0-9a-zA-Z]*)@([0-9a-zA-Z][-_\.]?[0-9a-zA-Z]*)\.([a-zA-Z]{2,3})$/;
	const arr = email.match(rexExp);

	console.log(arr);
	result['user'] = arr[1];
	result['domain'] = arr[2];
	result['tld'] = arr[3];


	return result;
}

console.log(parseEmail("test123123rt@gmail.com"));