function solution(k, m, score) {
    score.sort((a, b) => b - a);
    var tmp = 9999999;
    const ans = score.reduce((acc, n, i) => {
        tmp = n < tmp ? n : tmp;
        acc = i % m == m - 1 ? acc + tmp * m : acc;
        return acc;
    }, 0);
    return ans;
}

const score = [1, 2, 3, 1, 2, 3, 1];
console.log(solution(3, 4, score));