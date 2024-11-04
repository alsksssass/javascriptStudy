function padstring(str){
	if(str === undefined) return '---';
	return String(str).padStart(2,'-').padEnd(3,'-');
}
function printShell(day){
	console.log(`\x1b[31m:${padstring(day[0])}:\x1b[0m:${padstring(day[1])}::${padstring(day[2])}::${padstring(day[3])}::${padstring(day[4])}::${padstring(day[5])}:\x1b[34m:${padstring(day[6])}:\x1b[0m`);
	console.log('\x1b[31m:---:\x1b[0m:---::---::---::---::---:\x1b[34m:---:\x1b[0m');
}
function printDay(mounth){
	console.log(`\x1b[31m:---:\x1b[0m:---::---::${padstring(mounth)}::---::---:\x1b[34m:---:\x1b[0m`);
	const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', '\x1b[34m\x1b[0m','Sat'];
	console.log('\x1b[31m:---:\x1b[0m:---::---::---::---::---:\x1b[34m:---:\x1b[0m');
	console.log(
		`\x1b[31m:Sun:\x1b[0m:Mon::Tue::Wed::Thu::Fri::\x1b[34mSat:\x1b[0m`
	);
	console.log('\x1b[31m:---:\x1b[0m:---::---::---::---::---:\x1b[34m:---:\x1b[0m');
}
const day = new Date(2024,11);
console.log(day.getMonth());

console.log(day.toDateString());
function printCalender(day){
	const mounth = day.getMonth(); 
	printDay(mounth+1);
	let arr = [];
	if(day.getDay() !== 0){
		for(let i = 0; i < day.getDay(); i++)
			arr.push(null);
	}
	while(day.getMonth() === mounth){
		if(arr.length == 7) {
			printShell(arr);
			arr = [];
		}
		arr.push(day.getDate());
		day.setDate(day.getDate()+1);
	}
	if(arr.length !== 0)
		printShell(arr);
}
day.getDate()
printCalender(day);


