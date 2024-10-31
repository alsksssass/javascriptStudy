function solution(score) {
    const arr = [];
    const ans = [];
    score.forEach(a => {
        arr.push((a[0] + a[1]) / 2);
    });
    const sortedScores = arr.slice().sort((a, b) => b - a);
    arr.forEach(a => {
        const rank = sortedScores.indexOf(a) + 1;
        ans.push(rank);
    });
    return ans;
}

const score = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];
console.log(solution(score));
