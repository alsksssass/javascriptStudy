/*
Chapter 36

### 문제 3
중첩된 객체에서 특정 깊이의 값만 추출하는 함수를 구현하세요.


중첩된 객체에서 특정 깊이의 값만 추출하는 함수를 구현하세요.
*/

// Your solution

const test = {
	
	info:{
	name:'jimchoi',
	age:'26',
}}

const f=(obj1)=>{

	const result = {};

	const {info:{name}, info:{age}} = obj1;

	return {name, age};
}

console.log(f(test))