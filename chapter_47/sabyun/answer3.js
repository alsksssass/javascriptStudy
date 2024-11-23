/*
Chapter 47

### 문제 3
에러 로깅 시스템을 구현하세요. 발생한 에러를 파일이나 서버에 기록해야 합니다.

*/



// Your solution

const error_Log = []
for(let i =0; i < 10; i ++){
	try{
		const log = Math.floor(Math.random()*10);
		if(log > 5) throw new Error(`log time [${new Date()}] error cuz it is ${log}`);
	}
	catch(error){
		error_Log.push(String(error));
	}
}

console.log('error log = ', error_Log);