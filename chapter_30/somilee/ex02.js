// Q. 두 날짜 사이의 평일 수를 계산하는 함수를 작성하세요. 
//    공휴일 목록을 받아서 공휴일도 제외할 수 있도록 구현하세요.

function countWeekdays(startDate, endDate, holidays) {
    let cnt = 0;
    for (let day = new Date(startDate); day <= new Date(endDate); day.setDate(day.getDate() + 1)) {
        if (day.getDay() !== 0 && day.getDay() !== 6 && !holidays.includes(day.toISOString().slice(0, 10))) {
            cnt++;
        }
    }
    console.log(`${startDate}와 ${endDate} 사이 평일은 ${cnt}일 입니다.`);
}

const startDate = '2024-11-01';
const endDate = '2024-11-16';
const holidays = ['2024-11-01', '2024-11-08', '2024-11-15'];
countWeekdays(startDate, endDate, holidays);
