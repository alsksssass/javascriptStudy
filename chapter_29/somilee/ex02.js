// Q. 주사위 게임 시뮬레이터를 만드세요. 
//    n면체 주사위를 m번 던졌을 때의 통계(평균, 최빈값, 분산 등)를 계산하는 기능을 구현하세요.

function solution(n, m) {
    const result = [];
    for(let i = 0; i < m; i++)
        result.push(Math.floor(Math.random() * n) + 1);
    const arg = result.reduce((acc, x) => acc + x, 0) / m;

    const cnt = {};
    result.forEach(x => { cnt[x] = (cnt[x] || 0) + 1; });
    const maxKey = Object.values(cnt);
    console.log(cnt);
    console.log(maxKey);
    const variance = result.reduce((acc, x) => acc + Math.pow((x - arg), 2)) / m;
    console.log(`랜덥값 [${result}]의 평균은 ${arg}, 최빈값은 ${maxKey}, 분산은 ${Math.floor(variance * 10) / 10}입니다.`);
}

solution(5, 10);