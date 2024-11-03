const weeks = ['sun','mon','tue','wed','thu','fri','sat'];

const color = {
	blue : "\x1b[34m",
	red: "\x1b[31m",
	reset: "\x1b[0m",
	getColor(day) {
		if (day == 0) return this.red;
		if (day == 6) return this.blue;
		return this.reset;
	}
};

function drawCalendarWithoutColor(year, month) {
	const date = new Date(year, month - 1);
	date.setHours(date.getDate() - date.getTimezoneOffset() / 60);
	console.log(`[${year}/${month.toString().padStart(2, 0)}]`);
	const calendar = [];
	let week = {};
	for (; date.getMonth() != month; date.setDate(date.getDate() + 1)) {
		week[weeks[date.getDay()]] = date.getDate();
		if (date.getDay() == 6) {
			calendar.push(week);
			week = {};
		}
	}
	if (week.length) calendar.push(week);
	console.table(calendar, weeks);
}

function printDay(day, str) {
	if (!str)
		str = "";
	if (typeof str === 'number')
		str = str.toString();
	process.stdout.write(color.getColor(day) + str.padStart(4, ' '));
}

function drawCalendar(year, month) {
	const date = new Date(year, month - 1);
	date.setHours(date.getDate() - date.getTimezoneOffset() / 60);
	console.log(`[${year}/${month.toString().padStart(2, 0)}]`);
	const calendar = [];
	let week = Array.from({length: 7}, _ => null);
	for (; date.getMonth() != month; date.setDate(date.getDate() + 1)) {
		week[date.getDay()] = date.getDate();
		if (date.getDay() == 6) {
			calendar.push(week);
			week = [];
		}
	}
	if (week.length) calendar.push(week);
	for (let i=0; i<7; i++) {
		printDay(i, weeks[i]);
	}
	console.log();
	calendar.forEach(e => {
		for (let i in e) {
			printDay(i, e[i]);
		}
		console.log(color.reset);
	});
}

drawCalendar(2024, 11);
// drawCalendarWithoutColor(2024, 11);