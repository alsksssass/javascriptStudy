const score = [
  { name: "asdf", math: 98, korean: 58, science: 82},
  { name: "qwer", math: 12, korean: 32, science: 41},
  { name: "z", math: 94, korean: 47, science: 65},
  { name: "x", math: 63, korean: 98, science: 15},
  { name: "c", math: 42, korean: 96, science: 95},
];

function average(subject) {
  console.log(score.reduce((p, c) => p += c[subject], 0) / score.length);
}

function over(subject, thres) {
  console.log(score.filter(v => v[subject] >= thres));
}

function max(subject) {
  console.log(score.reduce((p, c) => Math.max(p, c[subject]), 0));
}

console.log("===== average =====");
average('math');
average('korean');

console.log("===== filter over score =====");
over('math', 63);
over('math', 64);

console.log("===== max =====");
max('math');
max('korean');
max('science');