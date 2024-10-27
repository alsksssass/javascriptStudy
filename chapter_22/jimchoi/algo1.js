
function solution(n, control) {
    const commands = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    };

    return control.split('').reduce((acc, cur) => acc + commands[cur], n);
	// 문자열 배열로 만들고 reduce로 누적값을 구한다. 초기값은 n이다.
}

console.log(solution(0, 'wsad')); // 0