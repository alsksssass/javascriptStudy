var num = 1; //(var로 선언해도 전역 객체의 속성으로 자동 등록되지 않는 환경?)
const obj = {
  num: 1000,
  foo() {
    const test2 = () => {
      console.log(this.num);
    };

    test2();

    const test3 = function () {
      console.log(this.num);
    };

    test3(); // ?
  },
};

obj.foo();

/**
 * 중첩 힘수를 일반 힘수로 호출하면 힘수 내부의 this에는 전역 객체가 바인딩된다.
 * 다만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로
 * 객체를 생성하 지 않는 일반 힘수에서 this는 의미가 없다.
 */
