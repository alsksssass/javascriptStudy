/*
Chapter 31

### 문제 1
신용카드 번호를 검증하는 정규표현식을 작성하세요. 다양한 카드사의 포맷(VISA, MasterCard, AMEX)을 지원해야 합니다.

*/

// Your solution

const reg = /^((4\d{12,15})|([5][1-5]|[2][2-7][0-9])\d{12}|3[47]\d{13})([-\s]?)$/;

// 예시: MasterCard (숫자만)
console.log(reg.test('5105105105105100')); // true

// 예시: VISA (숫자만)
console.log(reg.test('4111111111111111')); // true

// 예시: AMEX (숫자만)
console.log(reg.test('378282246310005')); // true

// 예시: MasterCard (공백 포함)
console.log(reg.test('5105 1051 0510 5100')); // true

// 예시: VISA (공백 포함)
console.log(reg.test('4111 1111 1111 1111')); // true

// 예시: AMEX (공백 포함)
console.log(reg.test('3782 8224 6310 005')); // true

// 예시: MasterCard (하이픈 포함)
console.log(reg.test('5105-1051-0510-5100')); // true

// 예시: VISA (하이픈 포함)
console.log(reg.test('4111-1111-1111-1111')); // true

// 예시: AMEX (하이픈 포함)
console.log(reg.test('3782-8224-6310-005')); // true

// 예시: 잘못된 카드 번호 (잘못된 시작 번호)
console.log(reg.test('1234567890123456')); // false

// 예시: 카드 번호 길이 미달 (VISA의 경우 13자리 이상이어야 함)
console.log(reg.test('41111111111')); // false

// 예시: 카드 번호 길이 초과 (VISA는 최대 16자리)
console.log(reg.test('411111111111111111111111')); // false