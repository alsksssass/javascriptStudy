// `Date` 객체를 사용하여 현재 날짜로부터 100일 후의 날짜를 계산하고
// 그 날짜가 무슨 요일인지 출력하는 함수를 작성하세요.

function solve () {
	const cur = new Date();
	cur.setDate(cur.getDate() + 100);
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	console.log(cur);
	const dayOfWeek = daysOfWeek[cur.getDay()];
	console.log(dayOfWeek);
}

solve();
