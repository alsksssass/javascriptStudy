/*
Chapter 47

### 문제 2
try-catch 문을 사용하여 비동기 함수의 에러를 처리하는 예제를 작성하세요.

*/

// Your solution
async function test() {
	try {
		console.log(await Promise.resolve(123));
		await Promise.reject(new Error('fail'));
	} catch (err) {
		console.log(err);
	}
}

test();
