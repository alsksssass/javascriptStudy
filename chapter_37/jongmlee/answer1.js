/*
Chapter 37

### 문제 1
주어진 배열에서 중복을 제거하고 고유한 값만 남기는 함수를 구현하세요.

*/

// Your solution

const removeDuplicate = (arr) => {
	return [...new Set(arr)];
}

arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicate(arr));