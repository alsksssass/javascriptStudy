/*
Chapter 36

### 문제 2
배열의 첫 번째 요소와 나머지 요소를 분리하는 함수를 작성하세요.

*/

// Your solution

function seperateFirst(arr) {
  const [first, ...others] = arr;
  return { first, others };
}

const arr = Array.from({ length: 10 }, (_, i) => i);
console.log(seperateFirst(arr));
