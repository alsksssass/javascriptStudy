/*
Chapter 36

### 문제 3
중첩된 객체에서 특정 깊이의 값만 추출하는 함수를 구현하세요.

*/

// Your solution
function extractDepth(obj, depth) {
  if (depth === 0 || typeof obj !== 'object' || obj === null) return obj;
  let ret = {};
  for (let key in obj) {
    const extracted = extractDepth(obj[key], depth - 1);
    if (typeof extracted === 'object')
      ret = { ...ret, ...extracted };
  }
  return ret;
}

const obj = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Wonderland',
    details: {
      zip: '12345',
      country: 'Fantasyland'
    }
  },
  age: 30
};

console.log(0, extractDepth(obj, 0));
console.log(1, extractDepth(obj, 1));
console.log(2, extractDepth(obj, 2));
