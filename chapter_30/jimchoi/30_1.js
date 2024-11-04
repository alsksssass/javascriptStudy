/**
 * 특정 날짜까지 남은 일수, 시간, 분, 초를 계산하는 카운트다운 함수를 구현하세요. D-day 계산기 형태로 만들어보세요.
 */

const d_day = (date)=> {
    const target = new Date(date);
    const now = new Date();

    const diff = target - now;

    if (diff < 0) {
        return "지남";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    console.log(`D-Day ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
}


d_day('2024/12/31/23:59:59');