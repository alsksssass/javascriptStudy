/*
Chapter 30

### 문제 2
두 날짜 사이의 평일 수를 계산하는 함수를 작성하세요. 공휴일 목록을 받아서 공휴일도 제외할 수 있도록 구현하세요.

*/

// Your solution

function weekdaysBetween(startDate, endDate, holidays = []) {
	let count = 0;
	const start = new Date(startDate);
	const end = new Date(endDate);
	const holidaySet = new Set(holidays.map(day => new Date(day).toDateString()));

	for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
		const isWeekend = d.getDay() === 0 || d.getDay() === 6;
		const isHoliday = holidaySet.has(d.toDateString());

		if (!isWeekend && !isHoliday) count++;
	}
	return count;
}

const startDate = "2024-11-01";
const endDate = "2024-11-30";
const holidays = ["2024-11-11", "2024-11-20"];
console.log(weekdaysBetween(startDate, endDate, holidays));