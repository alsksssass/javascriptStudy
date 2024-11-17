/*
Chapter 42

### 문제 3
비동기 함수의 에러 처리 방법을 보여주는 예제를 구현하세요.

*/

// Your solution
function myAsyncFunction() {
	return new Promise((resolve, reject) => {
		const success = true; // 에러 발생 조건
		if (success) {
			resolve("성공!");
		} else {
			reject(new Error("실패!"));
		}
	});
}

myAsyncFunction()
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.error("에러 발생:", error.message);
	});
