// 메서드의 축약 표현을 사용하여 계산기 객체를 만들고
// 다양한 연산을 수행하는 메서드를 구현하세요.

const calculator = {
	add(a, b) { return a + b; },
	subtract(a, b) { return a - b; },
	multiply(a, b) { return a * b; },
	divide(a, b) { return a / b; }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(6, 3));