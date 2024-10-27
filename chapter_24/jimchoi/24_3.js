const Counter = function () {
	let value = 0;
  
	return {
  
		 increase() {
			return ++value;
		  },
		   decrease() {
			  return --value;
		  },
		   getValue() {
			  return value;
		  }
	  }
  }

const c1 = new Counter();
const c2 = new Counter();

c1.increase();
c1.increase();
c2.decrease();
console.log(c1.getValue()); // 2
console.log(c2.getValue()); // -1

//메서드는 모두 자신의 힘수 정의가 평가되어 힘수 객체가 될 때 실행 중인 실행 컨텍스 트인 즉시 실행 힘수 실행 컨텍스트의 렉시컬 환경을 기억히는 클로저다
//자신만의 독립된 렉시컬 환경을 갖는다