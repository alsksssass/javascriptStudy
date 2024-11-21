function solution(k, tan) {
    const cnt = {};
    tan.forEach(n => cnt[n] = (cnt[n] || 0 ) + 1);
    const arr = Object.values(cnt).sort((a, b) => b - a);
    console.log(arr);
    var sum = 0, ans = 0;
    for(n of arr) {
        sum += n;
        ans++;
        if(sum >= k) break;
    }
    return ans;
}

const tan = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(6, tan));