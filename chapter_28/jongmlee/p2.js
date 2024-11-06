// 다양한 진법의 숫자를 변환하는 계산기를 구현하세요.
// 2진수, 8진수, 16진수 간의 상호 변환이 가능해야 합니다.

function convert(n, ibase, obase) {
	return parseInt(n, ibase).toString(obase);
}

console.log(convert(11011, 2, 10));
console.log(convert(27, 10, 2));
console.log(convert(27, 10, 8));
console.log(convert(27, 16, 10))
