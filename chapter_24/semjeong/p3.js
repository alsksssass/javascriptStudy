const Counter = function() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getValue() {
      return count;
    }
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getValue(), c2.getValue());
c1.increment();
c1.increment();
c1.increment();
console.log(c1.getValue(), c2.getValue());
c2.decrement();
c2.decrement();
console.log(c1.getValue(), c2.getValue());

/*
  Counter 생성자 함수를 호출하면 매번 새로운 Counter 함수의 실행 컨텍스트가 생성된다.
  따라서 c1과 c2가 독립적인 렉시컬 환경을 유지할 수 있다.
  
  독립적인 렉시컬 환경을 유지하고 싶다면 프로토타입 사용 불가


 함수의 outer 스코프는 함수가 정의될 때 정해진다 (렉시컬 스코프)
 객체는 스코프를 만들지 않으므로 increment와 같은 중첩함수는 Counter 함수의 스코프를 참조하게 된다.
 따라서 count라는 변수를 찾을 때, 해당 중첩함수 내에 count 변수가 없다면 그 상위 스코프인 Counter 함수의 변수를 참조한다.
 Counter 함수의 실행 환경??은 return문을 만나면 스택에서 삭제되지만, 중첩함수가 변수를 참조하고 있기 때문에
 렉시컬 스코프는 삭제되지 않고 유지된다.
 그러나 Counter 함수가 새로 불리게 되면 새로운 실행 환경??이 생성되고 그에 따라 스코프도 새로 생성되기 때문에 각 중첩함수는 다른 렉시컬 스코프를 가지게 된다.
*/
