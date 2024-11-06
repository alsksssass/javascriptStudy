/*
Chapter 31

### 문제 2
로그 파일에서 특정 패턴의 데이터를 추출하는 함수를 구현하세요. 날짜, IP 주소, 에러 메시지 등을 정규표현식으로 파싱하세요.

*/

// Your solution

function parseLog(log) {
	const logPattern = /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}) (\w+) (.+)/;  
	const matches = log.match(logPattern);
	if (matches) {
		return {
			date: matches[1],
			time: matches[2],
			ip: matches[3],
			level: matches[4],
			message: matches[5]
		};
	} else {
		return null;
	}
}

const log1 = '2024-11-07 12:45:33 192.168.1.1 ERROR User not found';
const log2 = '2024-11-07 12:46:00 192.168.1.2 WARNING Connection timeout';
const log3 = '2024-11-07 12:47:10 192.168.1.3 ERROR Database connection​';

console.log(parseLog(log1));
console.log(parseLog(log2));
console.log(parseLog(log3));