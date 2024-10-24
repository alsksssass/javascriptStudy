function solution(strArr) {
    let i = 0;
    return strArr.map(a => i++%2 ? a.toUpperCase() : a.toLowerCase());
}