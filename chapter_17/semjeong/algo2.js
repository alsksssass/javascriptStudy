function solution(arr, n) {
    return arr.map((x, i) => {
        if ((arr.length & 1) ^ (i & 1)) return x + n;
        return x;
    })
}