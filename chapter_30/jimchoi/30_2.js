/**
 * 두 날짜 사이의 평일 수를 계산하는 함수를 작성하세요. 공휴일 목록을 받아서 공휴일도 제외할 수 있도록 구현하세요.


 */

const countDays = (start, end, holidayList) => {

	let count = 0;
	const startDay = new Date(start);
	const endDay = new Date(end);

	console.log(endDay);
	if (startDay > endDay)
		return "업슴"

		for(let i= startDay; i <= endDay; i.setDate(i.getDate() + 1)) {
			// console.log(i);
			const day = i.getDay();
			if(day == 0 || day == 6)
				continue;
			const hday = i.toISOString().split('T')[0];
			// console.log(hday)
			if (holidayList.includes(hday))
				continue;
			count++;
			
		}
		return count;
}

const holidayList = ['2024-11-11', '2024-11-28']; // 공휴일 목록
console.log(countDays('2024-11-01', '2024-11-30', holidayList));