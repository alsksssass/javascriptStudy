//함수를 인자로 받아 실행 시간을 측정하는 고차 함수 measureTime을 작성하세요.
// 이 함수는 전달받은 함수를 실행하고, 실행에 걸린 시간을 밀리초 단위로 반환해야 합니다.

function measureTime(f) {
	return function() {
		const startTime = Date.now();
		f();
		const endTime = Date.now();
		const gap = endTime - startTime;
		console.log(`gap: ${gap} ms`);
	};
}