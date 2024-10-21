function solution(arr, n) {
    let len = arr.length;
    if(len % 2) for(let i = 0; i < len; i += 2) arr[i] += n;
    else for(let i = 1; i < len; i+= 2) arr[i] += n;
    return arr;
}