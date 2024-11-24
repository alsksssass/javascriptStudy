/*
Chapter 37

### 문제 1
주어진 배열에서 중복을 제거하고 고유한 값만 남기는 함수를 구현하세요.

*/

// Your solution

function removeDuplicate(arr) {
	return Array.from(new Set(arr));
}

const arr = [1, 2, 3, 4, 5, 5, 2, 2, 3, 3, 3, 4, 7, 8, 9, 9, 10, 6];
console.log(removeDuplicate(arr));

