/*
Chapter 47

### 문제 2
try-catch 문을 사용하여 비동기 함수의 에러를 처리하는 예제를 작성하세요.

*/


// Your solution
async function errorCatch(){
	try{
		await new Promise((resolve,reject) => setTimeout(()=> {
			reject(new Error('is error'))}
			,1000));
	}
	catch(error){
		console.log('error log',error);
	}
	console.log('end');
}

errorCatch();