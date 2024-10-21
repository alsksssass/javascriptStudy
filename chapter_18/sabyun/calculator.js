const calculator = {
	add (a,b) {return a + b},
	subtract (a,b) {return a - b},
	multiply (a,b) {return a * b},
	divide (a,b) {return a / b},
}

function calculate(operator,a,b){
	if(operator ==='+'){
		return calculator.add(a,b);
	}
	else if(operator === '-') {
		return calculator.subtract(a,b);
	}
	else if(operator === '*') {
		return calculator.multiply(a,b);
	}
	else if(operator === '/') {
		return calculator.divide(a,b);
	}
}



console.log(calculate('-',10,5));