/**
 * 금융 계산기를 만드세요. 
 * 이자율 계산, 대출 상환금 계산 등을 구현하고, 
 * 소수점 처리와 통화 표시를 적절히 해주세요.
 */

//단리 
const calculateSimpleInterest = (principal, rate, time)=>{
	return (principal * rate * time).toFixed(0);
}

//복리
const calculateCompoundInterest = (principal, rate, time, frequency)=>{
	return (principal * Math.pow((1+rate /frequency ),frequency * time )).toFixed(0);
}



console.log(calculateSimpleInterest(1000, 0.02, 3))
console.log(calculateCompoundInterest(1000, 0.02, 3, 2))