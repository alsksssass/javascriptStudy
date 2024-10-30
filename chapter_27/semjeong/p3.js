function test(a, b, c, d) {
  console.log(arguments);
  console.log(Array.from(arguments));
  console.log(Array.prototype.slice.call(arguments));
  console.log([...arguments]);
}

test(1, 2, 3, 4);