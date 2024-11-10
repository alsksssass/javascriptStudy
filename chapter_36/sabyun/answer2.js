/*
Chapter 36

### 문제 2
배열의 첫 번째 요소와 나머지 요소를 분리하는 함수를 작성하세요.

*/

// Your solution
function sliceArray(arr){
	return{frist:arr[0],other:arr.slice(1)};
}
const arr = [1,2,3,4,5,6,7,8];
console.log(sliceArray(arr));