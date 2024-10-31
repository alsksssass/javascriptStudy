class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    console.log(this.result);
    return this;
  }

  sub(num) {
    this.result -= num;
    console.log(this.result);
    return this;
  }

  div(num) {
    this.result /= num;
    console.log(this.result);
    return this;
  }

  mul(num) {
    this.result *= num;
    console.log(this.result);
    return this;
  }

  eq() {
    const ret = this.result;
    console.log(this.result);
    this.result = 0;
    return ret;
  }
}

const calc = new Calculator();

calc.add(4).div(2).mul(10).sub(3).eq();