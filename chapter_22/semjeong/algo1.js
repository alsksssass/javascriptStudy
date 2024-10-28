function solution(start_num, end_num) {
  // https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
  // console.log(Array(5), [...Array(5)]);
  return [...Array(end_num - start_num + 1)].map((_, i) => start_num + i);
  // return Array.from(new Array(end_num - start_num + 1), (_, i) => start_num + i);
}

solution(1, 2);