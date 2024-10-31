// 등수 매기기

function solution(score) {
  const average = score.map(v => (v[0] + v[1]) / 2);
  const sorted = Array.from(average).sort((a, b) => b - a);
  return average.map(v => sorted.indexOf(v) + 1);
}