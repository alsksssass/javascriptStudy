// 주사위 게임 시뮬레이터를 만드세요.
// n면체 주사위를 m번 던졌을 때의 통계(평균, 최빈값, 분산 등)를 계산하는 기능을 구현하세요.

class DiceSimulator {
	constructor(n, m) {
		if (!Number.isSafeInteger(n) || !Number.isSafeInteger(m)) {
			throw Error("wrong arguments");
		}
		this.n = n;
		this.m = m;
		this.rollResults = [];
		this.roll();
		console.log("roll rollResults : ");
		console.log(this.rollResults);
	}
	
	roll() {
		for (let i = 0; i < this.m; i++) {
			this.rollResults.push(Math.floor((Math.random() * this.n) + 1));
		}
	}
	getAvg() {
		return this.rollResults.reduce((acc, val) => acc + val, 0) / this.m;
	}
	getMode() {
		const frequency = [];
		this.rollResults.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
		return Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b));
	}

	getVariance() {
		const mean = this.getAvg();
		return this.rollResults.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / this.m;
	}
}

const tmp = new DiceSimulator(65, 10);
console.log("avg : " + tmp.getAvg());
console.log("mode : " + tmp.getMode());
console.log("variance : " + tmp.getVariance());