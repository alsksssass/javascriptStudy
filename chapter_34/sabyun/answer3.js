/*
Chapter 34

### 문제 3
커스텀 이터러블 객체를 만들어 for...of 문으로 순회하세요.

*/

// Your solution

const test = function(){
	let num = 0;
	return{
	[Symbol.iterator](){return this},
			next(){
				num++;
				return {value:num,done:num > 10}
			}
		}
	}

const a = test();
for(const num of a){
	console.log(num);
}