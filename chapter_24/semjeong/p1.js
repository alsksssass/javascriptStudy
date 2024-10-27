const counter = (function () {
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
}());

console.log(counter.getValue());
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.getValue());
