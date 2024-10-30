// 평행

function acc(x1, y1, x2, y2) {
  return Math.abs((y1 - y2) / (x1 - x2));
}

function isPararell(d1, d2, d3, d4) {
  return +(acc(...d1, ...d2) === acc(...d3, ...d4));
}

function solution(dots) {
  dots.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
  if (isPararell(...dots)) return 1;
  dots.sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);
  return isPararell(...dots);
}