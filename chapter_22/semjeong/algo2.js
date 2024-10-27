// const op = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };
// op[c](p);

function solution(n, control) {
  return control.split('').reduce((p, c) => {
      switch (c) {
          case 'w':
              p++;
              break;
          case 's':
              p--;
              break;
          case 'd':
              p += 10;
              break;
          case 'a':
              p -= 10;
              break;
      }
      return p;
  }, n);
}