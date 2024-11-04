// Q. 금융 계산기를 만드세요. 이자율 계산, 대출 상환금 계산 등을 구현하고, 
//    소수점 처리와 통화 표시를 적절히 해주세요.

function calculateInterest(money, rate, year) {
    return Math.floor(money * Math.pow((1 + rate / 100), year));
}

console.log(calculateInterest(1000000, 10, 3)); //1331000