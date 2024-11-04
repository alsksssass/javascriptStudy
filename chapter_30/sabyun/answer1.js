function D_dayCounter(date){
	const newDate = new Date();
	console.log(newDate.toDateString());
	const milSecond = date.getTime() - newDate.getTime();
	const Day = Math.floor(milSecond / (1000 * 3600 *24));
	let temp = milSecond % (1000 * 3600 *24); 
	const Hours = Math.floor(temp / (1000 * 3600));
	temp = temp % (1000*3600);
	const Minutes = Math.floor(temp / (1000 * 60));
	temp = temp % (1000 * 60); 
	const Seconds = Math.floor(temp / 1000);
	console.log(`d -day left ${Day}일 ${Hours} 시간 ${Minutes} 분 ${Seconds} 초 남음`);
}

const day = new Date(2025,7,2);
console.log(day.toDateString());
D_dayCounter(day);