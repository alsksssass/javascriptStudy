//Q. call, apply, bind 메서드를 사용하여 this 바인딩을 명시적으로 변경하는 예제를 작성하세요.
//   각 메서드의 차이점도 설명하세요.

function greet(greeting) {
    console.log(greeting + ', ' + this.name);
}

const person = { name: 'Somilee' };
greet.call(person, 'Hello'); // 'Hello, Somilee'
greet.apply(person, ['Hi']); // 'Hi, Somilee'

const greetSomilee1 = greet.bind(person);
greetSomilee1('Hey'); // 'Hey, Somilee'
const greetSomilee2 = greet.bind(person, 'Hey');
greetSomilee2(); // 'Hey, Somilee'

/*
call: 함수를 즉시 호출하며, this를 설정할 객체와 함께 나머지 인자들을 개별적으로 전달
apply: 함수를 즉시 호출하며, this를 설정할 객체와 함께 나머지 인자들을 배열로 전달
bind: 함수를 즉시 호출하지 않고, this를 설정할 객체와 함께 나머지 인자들을 고정한 새로운 함수를 생성
*/

const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2); // a를 2로 고정

console.log(double(5)); // 10
console.log(double(10)); // 20
