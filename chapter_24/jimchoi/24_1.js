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

const c = new Counter();
c.increase();

console.log(c.getValue()); // 1
console.log(c.value); // undefined
