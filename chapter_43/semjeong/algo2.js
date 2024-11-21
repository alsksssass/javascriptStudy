// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
    var answer = 0;
    let M = m;
    score.sort((a, b) => b - a).forEach(v => {
        if (--m == 0) {
            m = M;
            answer += M * v;
        }
    });
    return answer;
}
