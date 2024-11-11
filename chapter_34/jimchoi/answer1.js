/*
Chapter 34

### 문제 1
range 함수를 구현하세요. 시작값과 끝값을 받아 순회하세요.

*/

// Your solution

// const myRange = (num1, num2, step = 1) => {
	
// 	console.log(`s = ${num1}, e = ${num2}, step = ${step}`)
// 	if (num2 === undefined) {
// 		num2 = num1; 
// 		num1 = 0;
// 	}
// 	return {
// 		[Symbol.iterator]() {
// 			return {
// 				next() {

// 				}
// 			}
// 		}
// 	}
// }
const myRange = (start, end, step = 1) => {
	
	console.log(`s = ${start}, e = ${end}, step = ${step}`)
	if (end === undefined) {
		end = start; 
		start = 0;
	}
	let result = [];
	for(let i=start; i<end; i+= step) {
		result.push(i);
	}
	return result;
}

console.log(myRange(3))