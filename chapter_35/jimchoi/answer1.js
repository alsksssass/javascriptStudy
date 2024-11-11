/*
Chapter 35

### 문제 1
여러 개의 배열을 병합하고 중복을 제거하는 함수를 작성하세요.

*/

// Your solution

const makeArr = (...args) => {
  let arr = [].concat(...args);
  let result=[];
	
  arr.forEach((item) => {
    if (!result.includes(item)) 
		result.push(item);
  });
  return result;
};

console.log(makeArr([1, 2, 3, 4], [1, 2, 3, 4, 5]));
