// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    const ans = ["12345", "21232425", "3311224455"];
    return ans.map((v, i) => {
        return [i, answers.reduce((p, c, j) => p + (c == parseInt(ans[i][j % ans[i].length])), 0)];
    })
        .sort((a, b) => b[1] - a[1])
        .filter((v, _, arr) => v[1] == arr[0][1])
        .map(v => v[0] + 1);
}
