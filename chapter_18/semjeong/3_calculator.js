function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

const calculator = {
	add,
	subtract,
	multiply,
	divide
}

function calculate(a, b, op) {
	let res;
	switch (op) {
		case '+':
			res = calculator.add(a, b);
			break;
		case '-':
			res = calculator.subtract(a, b);
			break;
		case '*':
			res = calculator.multiply(a, b);
			break;
		case '/':
			res = calculator.divide(a, b);
			break;
		default:
			res = "wrong operator";
	}
	console.log(res);
}

calculate(1, 2, '-');
calculate(20, 142, '/');
calculate('asdf20', '142', '/');