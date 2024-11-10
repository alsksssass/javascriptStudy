/*
Chapter 34

### 문제 1
range 함수를 구현하세요. 시작값과 끝값을 받아 순회하세요.

*/

// Your solution
class NumberRange{
	constructor(from,to){
		this.from = from;
		this.to = to;
	}
	[Symbol.iterator](){
		let [value,fin] = [this.from,this.to];
		return {
			next(){
				return {value: value, done: value++ > fin}
			}
	}
}
}

const range = new NumberRange(1,100);
for(const num of range){
	console.log(num);
}