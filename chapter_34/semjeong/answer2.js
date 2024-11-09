/*
Chapter 34

### 문제 2
무한 피보나치 수열을 생성하는 이터레이터를 구현하세요.

*/

// Your solution
function fibo() {
  let [cur, pre] = [1, 0];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [cur, pre] = [cur + pre, cur];
      return {
        value: cur
      };
    }
  };
}

for (let i of fibo()) {
  if (i >= 100) break;
  console.log(i);
}
