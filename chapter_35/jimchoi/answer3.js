/*
Chapter 35

### 문제 3
함수에 가변 인자를 전달받아 모든 인자의 합을 구하는 함수를 작성하세요.

*/

// Your solution

const sum =(...args)=> args.reduce((pre,cur)=>pre+cur,0);

console.log(sum(1,2,3))