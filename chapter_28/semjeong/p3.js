class FinancialCalculator {
	static simpleInterest(principal, rate, duration = 1) {
		return principal * (1 + rate * duration).toFixed(2) + '₩';
	}

	static compoundInterest(principal, rate, duration = 1) {
		return principal * Math.pow(1 + rate, duration).toFixed(2) + '₩';
	}
}

console.log(FinancialCalculator.simpleInterest(100, 0.4, 2));
console.log(FinancialCalculator.compoundInterest(100, 0.4, 2));