function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}

function sum(arr) {
  return arr.reduce((p, c) => p + c, 0);
}

function average(arr) {
  return sum(arr) / arr.length;
}

console.log(max([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(min([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9]));