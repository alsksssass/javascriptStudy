function solution(N, stages) {
    const cnt = new Array(N+2).fill(0);
    stages.forEach(n => cnt[n] += 1);
    const result = {};
    cnt.reduce((acc, n, i) => {
        result[i] = n / (stages.length - acc);
        return acc + n;
    });
    return Object.keys(result).slice(0, N).sort((a, b) => result[b] - result[a]).map(Number);
}
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(5, stages));