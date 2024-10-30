// 매개변수 기본값, Rest 파라미터, 명명된 매개변수

function sum(...arr) {
  return arr.reduce((p, v) => p += v, 0);
}

function sub(x = 0, y = 0) {
  return x - y;
}

function div({ dividend = 0, divisor = 1 }) {
  return dividend / divisor;
}

console.log(sum(1, 2, 3, 4, 5, ...[6, 7, 8, 9, 10]));

console.log(sub(undefined), sub(3, 5));

console.log(div({ divisor: 5, dividend: 10 }));