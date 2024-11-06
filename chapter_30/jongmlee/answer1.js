/*
Chapter 30

### 문제 1
특정 날짜까지 남은 일수, 시간, 분, 초를 계산하는 카운트다운 함수를 구현하세요. D-day 계산기 형태로 만들어보세요.

*/

// Your solution

function countdown(targetDate) {
	const now = new Date();
	const diff = new Date(targetDate) - now;
	if (diff <= 0) return "D-day has passed";
	const d = Math.floor(diff / (1000 * 60 * 60 * 24));
	const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const m = Math.floor((diff / (1000 * 60)) % 60);
	const s = Math.floor((diff / 1000) % 60);
	return `D-day: ${d} days, ${h} hours, ${m} minutes, ${s} seconds`;
}

const targetDate = "2024-12-31T00:00:00";
console.log(countdown(targetDate));