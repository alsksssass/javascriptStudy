/*
Chapter 47

### 문제 2
try-catch 문을 사용하여 비동기 함수의 에러를 처리하는 예제를 작성하세요.

*/

// Your solution

async function f() {
	throw new Error("error occurred!");;
}

async function main() {
	try {
		const data = await f();
		console.log(data);
	} catch (e) {
		console.log("에러 발생: ", e.message);
	}
}

main();