// Q. 특정 날짜까지 남은 일수, 시간, 분, 초를 계산하는 카운트다운 함수를 구현하세요. 
//    D-day 계산기 형태로 만들어보세요.

function calculateDate(D_day) {
    const date = new Date().getTime();
    const D_date = new Date(D_day).getTime();
    const MS = D_date - date;

    const D = Math.floor(MS / (1000 * 60 * 60 * 24));
    const H = Math.floor(MS % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const M = Math.floor(MS % (1000 * 60 * 60) / (1000 * 60));
    const S = Math.floor(MS % (1000 * 60) / 1000);

    console.log(`D-Day까지 ${D}일 ${H}시간 ${M}분 ${S}초 남았습니다.`);
}

calculateDate('2024-12-24T00:00:00');