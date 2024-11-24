/*
Chapter 37

### 문제 2
학생들의 성적을 관리하는 시스템을 Map을 사용하여 구현하세요.

*/

// Your solution
class ScoreSystem {
	#id;

	constructor() {
		this.score = new Map();
		this.nameToId = new Map();
		this.#id = 0;
	}

	addStudent(name) {
		if (typeof name !== 'string')
			return -1;
		this.nameToId.set(name, this.#id);
		this.score.set(this.#id, new Map());
		return this.#id++;
	}

	removeStudent(name) {
		if (typeof name !== 'string')
			return -1;
		const id = this.nameToId.get(name);
		if (id === undefined) {
			return -1;
		}
		this.nameToId.delete(name);
		this.score.delete(id);
		return id;
	}

	addScore(name, subject, score) {
		if (typeof name !== 'string' || typeof subject !== 'string'
			|| typeof score !== 'number')
			return false;
		const id = this.nameToId.get(name);
		if (id === undefined) {
			return false;
		}
		const scoreMap = this.score.get(id);
		scoreMap.set(subject, score);
		return true;
	}

	deleteScore(name, subject) {
		if (typeof name !== 'string' || typeof subject !== 'string')
			return false;
		const id = this.nameToId.get(name);
		if (id === undefined) {
			return false;
		}
		const scoreMap = this.score.get(id);
		scoreMap.delete(subject);
		return true;
	}

	modifyScore(name, subject, score) {
		return this.deleteScore(name, subject)
			|| this.addScore(name, subject, score);
	}

	print() {
		for (let e of this.nameToId.entries()) {
			console.log(e[0], this.score.get(e[1]));
		}
	}
}

const s = new ScoreSystem();
s.addStudent('semjeong');
s.addScore('semjeong', 'korean', 12);
s.addScore('semjeong', 'math', 24);
s.addScore('semjeong', 'science', 15);
s.addStudent('asdf');
s.addScore('asdf', 'korean', 51);
s.addScore('asdf', 'math', 27);
s.addScore('asdf', 'science', 91);
s.addStudent('zxcv');
s.addScore('zxcv', 'korean', 61);
s.addScore('zxcv', 'math', 82);
s.addScore('zxcv', 'science', 23);

s.print();
