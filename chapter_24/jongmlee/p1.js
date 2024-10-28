// 카운터를 만드는 함수를 클로저를 사용하여 구현하세요.
// 이 카운터는 증가(increment), 감소(decrement), 현재 값 확인(getValue) 기능이 있어야 합니다.

function counter(init) {
	let curValue = init;
	return {
		increment : function (n) {
			curValue += n;
		},
		decrement : function (n) {
			curValue -= n;
		},
		getValue : function () {
			return curValue;
		}
	}
}

const counter1 = counter(0);
counter1.increment(2);
console.log(counter1.getValue());
counter1.decrement(1);
console.log(counter1.getValue());
