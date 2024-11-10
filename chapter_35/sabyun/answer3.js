/*
Chapter 35

### 문제 3
함수에 가변 인자를 전달받아 모든 인자의 합을 구하는 함수를 작성하세요.

*/

// Your solution
function allSum(...arg){
	return[...arg].reduce((a,b)=> a+b,0);
}

console.log(allSum(1,2,3,4,5,6,7,8,9,10));