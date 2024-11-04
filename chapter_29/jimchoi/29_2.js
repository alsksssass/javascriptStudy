/**
 * 주사위 게임 시뮬레이터를 만드세요.
 * n면체 주사위를 m번 던졌을 때의 통계(평균, 최빈값, 분산 등)를
 * 계산하는 기능을 구현하세요.
 */

class DiceSimulator {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.result = this.roll();
  }

  roll() {
    let arr = [];
    for (let i = 0; i < this.m; i++) {
      arr.push(Math.floor(Math.random() * this.n) + 1);
    }
    return arr;
  }

  mean() {
    const sum = this.result.reduce((acc, curr) => (acc += curr), 0);
    return sum / this.result.length;
  }

  mode() {
    let arr = [];
    this.result.forEach((element) => {
      arr.push(0);
    });
    for (let i = 0; i < this.result.length; i++) {
      for (let j = 0; j < this.result.length; j++) {
        if (this.result[i] == this.result[j] && i != j) arr[j] += 1;
      }
    }
    arr = arr.sort((a, b) => b - a);
    return arr[0];
  }
  variance() {
    return (
      this.result.reduce(
        (acc, curr) => acc + Math.pow(curr - this.mean(), 2),
        0
      ) / this.result.length
    );
  }
}


const test = new DiceSimulator(6, 10);

console.log(test.mean())
console.log(test.mode())
console.log(test.variance())