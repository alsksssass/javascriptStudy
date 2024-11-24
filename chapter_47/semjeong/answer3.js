/*
Chapter 47

### 문제 3
에러 로깅 시스템을 구현하세요. 발생한 에러를 파일이나 서버에 기록해야 합니다.

*/

// Your solution
class ErrorLogger {
	constructor() {
		this.logs = [];
	}

	check(func, args) {
		let ret;
		try {
			ret = func(args);
			return ret;
		} catch(err) {
			this.logs.push(err.message);
		}
	}

	showLogs() {
		console.log(this.logs);
	}
}

const logger = new ErrorLogger();
logger.check(() => {throw new Error("error");});
logger.check(() => {throw new Error("error2");});
logger.showLogs();
