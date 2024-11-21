// 귤 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
    const count = {};
    var answer = 0;
    tangerine.forEach(v => count[v] ? count[v]++ : (count[v] = 1));
    for (let c of Object.values(count).sort((a, b) => b - a)) {
        k -= c;
        answer++;
        if (k <= 0) break;
    }
    return answer;
}
