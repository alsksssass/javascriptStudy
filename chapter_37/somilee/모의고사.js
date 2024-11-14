function solution(arr) {
    const ans = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const cnt = [];
    for(let i = 0; i < 3; i++)
        cnt[i] = arr.reduce((acc, n, idx) => n === ans[i][idx % ans[i].length] ? acc + 1 : acc, 0);
    return cnt.map((n, i) => (n === Math.max(...cnt) ? i + 1 : -1)).filter(n => n !== -1);
}

const arr = [1,2,3,4,5];
console.log(solution(arr)); // 1