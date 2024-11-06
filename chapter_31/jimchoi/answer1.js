/*
Chapter 31

### 문제 1
신용카드 번호를 검증하는 정규표현식을 작성하세요. 다양한 카드사의 포맷(VISA, MasterCard, AMEX)을 지원해야 합니다.

*/

// Your solution


const isCardNum = (cardNum) => {
	return /^\d{4}-\d{4}-\d{4}-\d{4}/.test(cardNum);
}

console.log(isCardNum("1234-1234-1234-1234"))
console.log(isCardNum("1234-1234-1234-123"))