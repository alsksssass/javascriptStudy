function solution(arr, k) {
    return arr.map((x) => k % 2 ? x * k : x + k);
}