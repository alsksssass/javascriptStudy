/*
Chapter 31

### 문제 3
URL을 파싱하여 프로토콜, 호스트, 경로, 쿼리 파라미터, 해시 등을 분리하는 함수를 정규표현식을 사용하여 구현하세요.

*/

// Your solution

function parseURL(url) {
	const pattern = /^(https?):\/\/([^\/?#]+)([^?#]*)(\?[^#]*)?(#.*)?$/;
	const match = url.match(pattern);
	
	if (!match) return null;

	return {
		protocol : match[1],
		host : match[2],
		path : match[3],
		queryParams : match[4],
		hash : match[5]
	};
}

// 사용 예시
const url = "https://github.com/alsksssass/javascriptStudy";
const url2 = "https://example.com/path/to/page?name=faker&age=30#goat";
console.log(parseURL(url));
console.log(parseURL(url2));