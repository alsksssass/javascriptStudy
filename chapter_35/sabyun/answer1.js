/*
Chapter 35

### 문제 1
여러 개의 배열을 병합하고 중복을 제거하는 함수를 작성하세요.

*/

// Your solution
function union(...rest){
	return [...new Set(...rest)];
}

console.log(union([1,2,3],[2,3,4],[4,5,6]));