function solution(dots) {
    const arr = [[0, 1],[0,2],[0,3],[2,3],[1,3],[1,2]];
    const ans = [];
    arr.forEach(a => { ans.push((dots[a[0]][0] - dots[a[1]][0]) / (dots[a[0]][1] - dots[a[1]][1]));});
    for(let i = 0; i < 3; i++)
        if (ans[i] == ans[i+3])
            return 1;
    return 0;
}
const dots = [[3, 5], [4, 1], [2, 4], [5, 10]];
console.log(solution(dots));