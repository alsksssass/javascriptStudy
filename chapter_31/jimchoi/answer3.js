/*
Chapter 31

### 문제 3
URL을 파싱하여 프로토콜, 호스트, 경로, 쿼리 파라미터, 해시 등을 분리하는 함수를 정규표현식을 사용하여 구현하세요.

# 프로그래머스 알고리즘 문제

*/

// Your solution


const parseURL = (url)=> {
	const result = {};

	const rexExp = /^(https?):\/\/([^\/:?#]+)(?::(\d+))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/;

	const arr = url.match(rexExp);

	// console.log(arr);
	result['protocol'] = arr[1];
	result['host'] = arr[2];
	result['port'] = arr[3];
	result['path'] = arr[4];
	result['queryParamsString'] = arr[5];
	result['hash'] = arr[6];

	return result;
}

console.log(parseURL("https://www.example.com:8080/path/to/page?query=javascript&sort=ascending#section1"))