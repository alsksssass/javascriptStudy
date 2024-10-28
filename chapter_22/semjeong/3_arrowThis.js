const arrow = () => {
	console.log(this);
}

function normal() {
	console.log(this);
}

const arrowReturned = (function () {
	const name = "inner";
	const arrow = () => {
		console.log(this, name);
	}
	return arrow;
}());

const Test = function(name) {
	return {
		name,
		normal() {
			console.log(this);
		},
		arrow: () => {
			console.log(this);
		}
	};
};

arrow(); // {} ?
normal(); // global
(new normal()); // normal {}
arrowReturned(); // global

const test = new Test("ttest");
test.normal(); // test
test.arrow(); // Test 함수

/*
화살표 함수는 this 바인딩이 존재하지 않고, 상위 스코프의 this를 그대로 참조한다.
일반 함수는 호출할 때 this가 바인딩되고, 화살표 함수는 선언 시점에 this 객체가 결정된다.
*/