/*
Chapter 33

### 문제 1
Symbol을 사용하여 객체의 프라이빗 프로퍼티를 구현하는 예제를 작성하세요. 특정 메서드로만 접근 가능한 데이터를 관리해보세요.

*/

// Your solution

class Temp {
	constructor(value) {
		this[Symbol('private')] = value;
	}
	getPrivateData() {
		return this[Object.getOwnPropertySymbols(this)[0]];
	}
	setPrivateData(value) {
		this[Object.getOwnPropertySymbols(this)[0]] = value;
}
}

const obj = new Temp(10);

console.log(obj.getPrivateData());
obj.setPrivateData(20);
console.log(obj.getPrivateData());
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
