/*
Chapter 35

### 문제 1
여러 개의 배열을 병합하고 중복을 제거하는 함수를 작성하세요.

*/

// Your solution

function solution(...arr) {
	return [...new Set([].concat(...arr))];
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 6];

console.log(solution(arr1, arr2, arr3));
  