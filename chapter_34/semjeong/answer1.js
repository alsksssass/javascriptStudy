/*
Chapter 34

### 문제 1
range 함수를 구현하세요. 시작값과 끝값을 받아 순회하세요.

*/

// Your solution
function range(start, end) {
  let cur = start;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        value: cur,
        done: cur++ > end
      }
    }
  };
}

for (let i of range(1, 10)) {
  console.log(i);
}
