// 금융 계산기를 만드세요. 
//이자율 계산, 대출 상환금 계산 등을 구현하고,
// 소수점 처리와 통화 표시를 적절히 해주세요.

class FinanceCalculator {
	static simple(n, rate, day) {
		return n * (1 + rate * day).toFixed(2);
	}

	static complex(n, rate, day) {
		return n * Math.pow(1 + rate, day).toFixed(2);
	}
}

console.log(FinanceCalculator.simple(12341, 2, 100));
console.log(FinanceCalculator.complex(12341, 2, 100));