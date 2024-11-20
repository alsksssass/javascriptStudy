function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        answer += score[((i + 1) * m) - 1] * m;
    }
    return answer;
}