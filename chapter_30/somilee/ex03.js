function printCalendar(year, month) {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const redColor = '\x1b[31m';    // 빨간색 (주말 표시)
    const resetColor = '\x1b[0m';   // 색 초기화

    const firstDay = new Date(year, month - 1, 1); //달 첫번쨰날
    const lastDay = new Date(year, month, 0).getDate(); //이전달 마지막날
    
    console.log(`\n  < ${year}년 ${month}월 >\n`);
    console.log(daysOfWeek.join(' '));

    let output = '   '.repeat(firstDay.getDay()); // 첫째 날 이전 공백
    
    for (let date = 1; date <= lastDay; date++) {
        const dayOfWeek = new Date(year, month - 1, date).getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6)
            output += `${redColor}${String(date).padStart(2, ' ')}${resetColor} `; // 주말인 경우 빨간색으로 표시
        else
            output += `${String(date).padStart(2, ' ')} `; // 평일인 경우 일반 색으로 표시
        
        if (dayOfWeek === 6) {
            console.log(output);
            output = '';
            currentDay = 0;
        }
    }
    
    // 남아있는 날짜 출력
    if (output) console.log(output);
}

// 예제 사용
printCalendar(2024, 11);
