//Q. 카운터를 만드는 함수를 클로저를 사용하여 구현하세요. 
//   이 카운터는 증가(increment), 감소(decrement), 현재 값 확인(getValue) 기능이 있어야 합니다.

function func(n) {
    this.num = n;
    this.increment = function() { ++n; };
    this.decrement = function() { --n; };
    this.getValue = function() { console.log(n); };
}

const ex = new func(10);

ex.increment();
ex.getValue();
ex.decrement();
ex.getValue();