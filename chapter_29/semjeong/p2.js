class DiceSimulator {
	constructor(n, m) {
		if (!n || n < 0) n = 1;
		if (!m || m < 0) m = 1;
		this.n = n;
		this.m = m;
		this.roll = [];
	}

	simulate(n, m) {
		if (n > 0 && m > 0) {
			this.n = n;
			this.m = m;
		}
		this.roll = [];
		m = this.m;
		while (m--) {
			this.roll.push(Math.floor((Math.random() + 1) * this.n));
		}
		console.log(`<roll ${this.n} faced dice for ${this.m} times>`)
		console.log(this.roll);
		console.log('average', this.average, 'mode', this.mode, 'variance', this.variance);
	}

	get average () {
		// if (this.roll.length === 0) return null;
		return this.roll.reduce((p, c) => p + c, 0) / this.roll.length;
	}

	get mode() {
		// if (this.roll.length === 0) return null;
		const count = this.roll.reduce((p, c) => {
			const idx = p.findIndex(v => v.value == c);
			if (idx === -1) {
				p.push({value: c, count: 1});
			} else {
				p[idx].count++;
			}
			return p;
		}, []);
		count.sort((a, b) => b.count - a.count);
		return count.filter(v => v.count == count[0].count).map(v => v.value);
	}

	get variance() {
		// if (this.roll.length === 0) return null;
		const average = this.average;
		return this.roll.reduce((p, v) => p + Math.pow(v - average, 2), 0) / this.roll.length;
	}
}

const sim = new DiceSimulator(6, 10);
sim.simulate();