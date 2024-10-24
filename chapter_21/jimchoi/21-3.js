/*
Date 객체를 사용하여 현재 날짜로부터 100일 후의 날짜를 계산하고, 
그 날짜가 무슨 요일인지 출력하는 함수를 작성하세요.

*/

function getDay100() {
	const today = new Date();
	console.log(today);
	const day100 = new Date();
	day100.setDate(today.getDate() + 100);
	return day100;
}

console.log(getDay100()); 