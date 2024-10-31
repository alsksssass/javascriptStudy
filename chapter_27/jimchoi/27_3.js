const test = function () {
  const arr = [...arguments];
  console.log(arr); 

return arr.reduce((pre, cur) => pre + cur, 0);
};

console.log(test(1, 2, 3, 4, 5));
