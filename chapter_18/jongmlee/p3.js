//add, subtract, multiply, divide 함수를 작성하고, 이들을 객체의 메서드로 저장하는 calculator 객체를 생성하세요.
//그리고 calculate 함수를 작성하여 연산자와 두 개의 숫자를 입력받아 calculator 객체의 적절한 메서드를 호출하도록 구현하세요.

function Calculator(a, b, op) {
	this.add = function (a, b) {
		return a + b;
	}
	this.subtract = function (a, b) {
		return a - b;
	}
	this.multiply = function (a, b) {
		return a * b;
	}
	this.divide = function (a, b) {
		if (b === 0) {
			throw new Error("0으로 나눌 수 없습니다");
		}
		return a / b;
	}
	this.calculate = function (a, b, op) {
		if (op === '+') {
			this.add(a, b);
		} else if (op === '-') {
			this.subtract(a, b);
		} else if (op === '*') {
			this.multiply(a, b);
		} else if (op === '/') {
			this.divide(a, b);
		} else {
			throw new Error("잘못된 연산자 입니다");
		}

	}
}

