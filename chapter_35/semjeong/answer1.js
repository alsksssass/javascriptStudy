/*
Chapter 35

### 문제 1
여러 개의 배열을 병합하고 중복을 제거하는 함수를 작성하세요.

*/

// Your solution
function unionArray(...arr) {
  const ret = [];
  arr.forEach(v => ret.push(...v));
  return ret.filter((v, i) => i === ret.indexOf(v));
}

console.log(unionArray([1,2,3,4], [5,6,7], [8, 9, 10], [1,2,3,4], [5,6,7], [8, 9, 10], [1,2,3,4], [5,6,7], [8, 9, 10]))
