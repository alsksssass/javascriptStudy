/*주어진 숫자를 특정 단위로 포맷팅하는 함수를 만드세요.
예를 들어, 1000 -> 1k, 1000000 -> 1M 등으로 변환하세요.*/

const formatNumber = (num)=> {
	if (!Number.isFinite(num) || !Number.isInteger(num))
		return NaN;

	if(num >= 1000000) {
		return (num * 0.000001).toString() + 'm';
	}
	else if(num >= 1000)
		return (num * 0.001).toString()  + 'k';
	else 
		return num.toString();
}

console.log(formatNumber(1000000));
console.log(formatNumber(1000));
console.log(formatNumber(10));