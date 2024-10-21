// Q.함수를 인자로 받아 실행 시간을 측정하는 고차 함수 measureTime을 작성하세요.
//   이 함수는 전달받은 함수를 실행하고, 실행에 걸린 시간을 밀리초 단위로 반환해야 합니다.
//고차함수 -> 다른 함수를 인자로 받거나 리턴하는 함수(함수형 프로그래밍)

function measureTime(fn) {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end-start;
}

function countNum() {
    for(let i = 0; i < 9999999; i++) {}
}

console.log(measureTime(countNum));