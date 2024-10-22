const day = new Date();
console.log(`today is [${day.toDateString()}] and form now after 100 day is`);
day.setDate(day.getDate() + 100);
console.log(day.toDateString());
console.log(`and the day is [${day.toDateString().split(' ')[0]}]`);


function solution(strArr) {
    return strArr.map((element, idx) => {
		return idx % 2 ? element.toUpperCase():element.toLowerCase();
	});
}