function countLeapYears(from, to) {
	const f = from.getFullYear();
	const t = to.getFullYear();
	return (Math.floor(t / 4) - Math.floor(f / 4))
			- (Math.floor(t / 100) - Math.floor(f / 100))
			+ (Math.floor(t / 400) - Math.floor(f / 400));
}

function isReverse(from, to) {
	if (from.getMonth() == to.getMonth()) return from.getDate() > to.getDate();
	return from.getMonth() > to.getMonth();
}

function isIn(from, to, m, d) {
	return (from.getMonth() + 1 <= m  && to.getMonth() + 1 >= m) && (from.getDate() <= d && to.getDate() >= d);
}

function weekday(from, to, holiday = []) {
	const diff = new Date(to.valueOf() - from.valueOf());
	if (diff.valueOf() < 0) {
		console.log("wrong input");
		return;
	}
	const day = Math.floor(Math.floor(Math.floor(Math.floor(diff.valueOf() / 1000) / 60) / 60) / 24) + 1;
	let weekdays = day - Math.floor(day / 7) * 2;
	for  (let i=0, s=from.getDay(); i<7; i++) {
		if ((s + i) % 7 == 0 || (s + i) % 7 == 6) {
			weekdays--;
		}
		if ((s + i) % 7 == to.getDay()) break;
	}
	const year = Math.floor((day - countLeapYears(from, to) * 366) / 365) + countLeapYears(from, to);
	weekdays -= holiday.length * year;
	let flag = false;
	let start = from, end = to;
	if (isReverse(from, to)) {
		flag = true;
		start = to;
		end = from;
	}
	for (let h of holiday) {
		const [m, d] = h.split('/').map(x => parseInt(x));
		if (isIn(start, end, m, d) ^ flag) weekdays--;
		if (m == 2 && d == 29) weekdays += year - countLeapYears(from, to);
	}
	return weekdays;
}

console.log(weekday(new Date("2020/01/03"), new Date("2024/11/2"), ["1/1", "3/1"]));
console.log(weekday(new Date("2020/01/01"), new Date("2020/01/01"), ["1/1", "3/1"]));
console.log(weekday(new Date("2020/01/01"), new Date("2020/01/10"), ["1/1", "3/1"]));
console.log(weekday(new Date("2020/01/01"), new Date("2020/01/11"), ["1/1", "3/1"]));
console.log(weekday(new Date("2020/01/01"), new Date("2020/01/12"), ["1/1", "3/1"]));
console.log(weekday(new Date("2020/01/01"), new Date("2020/01/13"), ["1/1", "3/1"]));
console.log(weekday(new Date("2020/01/01"), new Date("2020/02/01")));
console.log(weekday(new Date("2024/01/01"), new Date("2024/02/01")));