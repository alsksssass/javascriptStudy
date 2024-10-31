
/**
 * 메서드 축약표현
 */
const Calculator = {

	add(x, y){
		return x + y;
	},
	subtract(x, y){
		return x - y;
	},
	multiply(x, y){
		return x * y;
	},
	divide(x, y){
		return (y === 0) ? "error" : x / y;
	}
}

const num1 = 10;
const num2 = 5;

console.log( Calculator.add(num1, num2));       // 15
console.log(Calculator.subtract(num1, num2)); // 5
console.log(Calculator.multiply(num1, num2)); // 50
console.log(Calculator.divide(num1, num2));       // 2

console.log(Calculator.divide(num1, 0)); // "error"
