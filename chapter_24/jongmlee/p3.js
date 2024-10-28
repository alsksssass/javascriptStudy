// 클로저를 사용하여 여러 개의 카운터를 생성하고, 각각의 카운터가 독립적으로 동작하는 예제를 만드세요.
// 그리고 클로저가 이런 동작을 가능하게 하는 원리를 설명하세요.

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

const c1 = counter(1);
const c2 = counter(2);
const c3 = counter(3);

c1.decrement(1);
c2.decrement(1);
c3.decrement(1);
console.log(c1.getValue());
console.log(c2.getValue());
console.log(c3.getValue());

// 함수가 생성될 떄의 환경을 기억하는 특성 덕분에 각각의 함수가 만들어질 때의 상태를 기억하고 저장하고 있어 독립적으로 생성이 가능하다.