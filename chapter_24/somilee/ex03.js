// Q. 클로저를 사용하여 여러 개의 카운터를 생성하고, 각각의 카운터가 독립적으로 동작하는 예제를 만드세요.
//    그리고 클로저가 이런 동작을 가능하게 하는 원리를 설명하세요.

function func(num) {
    this.num = num;

    this.increase = function() { return ++num; };
    this.decrease = function() { return --num; };
    this.square = function() { return num *=num; };
}

const ex = new func(2);
console.log(ex.square());
console.log(ex.increase());
console.log(ex.decrease());

/*
클로저가 count 변수를 참조하고 있기 때문에 새로운 메서드를 통해 count의 값을 원하는 대로 변경 가능.
-> count가 외부에 노출되지 않고 보호되면서도, 함수 내부에서 유연하게 조작 가능.
*/