/*
Chapter 36

### 문제 2
배열의 첫 번째 요소와 나머지 요소를 분리하는 함수를 작성하세요.

*/

// Your solution

function splitArray([first, ...rest]) {
	return { first, rest };
  }
  
  const result = splitArray([1, 2, 3, 4, 5]);
  console.log(result);