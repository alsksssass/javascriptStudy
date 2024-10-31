// 화살표 함수와 일반 함수의 차이점을 보여주는 예제를 작성하세요.
// this 바인딩, arguments 객체, 생성자 함수로서의 사용 등의 차이를 포함하세요.

// 1. this 바인딩
const obj = {
	value: 42,
	regularFunc: function() { return this.value; },
	arrowFunc: () => this.value
};

console.log(obj.regularFunc());
console.log(obj.arrowFunc());

// 2. arguments
function regularFunc() {
	console.log(arguments);
}
const arrowFunc = () => {
	console.log(arguments);
};

regularFunc('a', 'b');
//arrowFunc('a', 'b');

// 3. 생성자
function RegularFunc() {
	this.value = 42;
}
const ArrowFunc = () => {
	this.value = 42;
};

const regularInstance = new RegularFunc();
//const arrowInstance = new ArrowFunc();