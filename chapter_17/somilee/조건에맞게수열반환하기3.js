function solution(arr, k) {
    if(k%2) arr = arr.map(a => a * k);
    else arr = arr.map(a => a + k);
    return arr;
}