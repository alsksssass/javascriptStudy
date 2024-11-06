/*
Chapter 31

### 문제 2
로그 파일에서 특정 패턴의 데이터를 추출하는 함수를 구현하세요. 날짜, IP 주소, 에러 메시지 등을 정규표현식으로 파싱하세요.

*/

// Your solution

const logFile = [
	"2024-11-06 12:45:23 - IP: 192.168.1.1 - ERROR: Failed to connect to server",
	"2024-11-06 13:10:45 - IP: 192.168.1.5 - ERROR: Timeout while connecting",
	"2024-11-07 13:15:07 - IP: 192.168.1.1 - WARNING: Low disk space",
	"2024-11-08 13:20:12 - IP: 192.168.1.10 - ERROR: Database connection lost",
	"2024-11-09 13:45:22 - IP: 192.168.1.5 - INFO: Connection established",
]


class findLog {
	
	constructor(logFile) {
		this.logFile = logFile;
	}
	getError(){
		const rexExp = /ERROR/;
		const errorLog = [];
		logFile.forEach(element => {
			if (rexExp.test(element))
				errorLog.push(element);
		});
		return errorLog;
	}
	
	findLogByDate(date){
		const rexExp = /^\d{4}-\d{2}-\d{2}/;
		const dateLog = [];
		if(!rexExp.test(date))
			return "wrong date format"
		logFile.forEach(element => {
			if (element.includes(date))
			dateLog.push(element);
		});
		return dateLog;
	}
	findLogByIp(ip){
		const rexExp = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
		const ipLog = [];
		if(!rexExp.test(ip))
			return "wrong IP format"
		logFile.forEach(element => {
			if (element.includes(ip))
			ipLog.push(element);
		});	
	return ipLog;
}
}

const test = new findLog(logFile);

console.log(test.getError())
console.log(test.findLogByDate("2024-11-06"))
console.log(test.findLogByDate("20241106"))
console.log(test.findLogByIp("192.168.1.5")) 
console.log(test.findLogByIp("192.168.1.5123")) // 왜 되지