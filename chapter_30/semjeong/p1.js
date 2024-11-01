function countdown(dday) {
	const now = new Date();
	console.log(now.valueOf());
	const diff = new Date(dday.valueOf() - now.valueOf());
	const tSecond = Math.floor(diff.valueOf() / 1000);
	const tMinute = Math.floor(tSecond / 60);
	const tHour = Math.floor(tMinute / 60);
	const tDay = Math.floor(tHour / 24);
	console.log(tDay, "day", tHour % 24, "hour", tMinute % 60, "minute", tSecond % 60, "second");
}

countdown(new Date(1733025600000)); // Sun Dec 01 2024 13:00:00 UTC+0900 (Korean Standard Time)
countdown(new Date("2025/01/01"));