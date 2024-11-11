/*
Chapter 34

### 문제 3
커스텀 이터러블 객체를 만들어 for...of 문으로 순회하세요.

*/

// Your solution

class IterableCat {
	constructor() {
		this.activities = ["eat", "sleep", "play", "watching butler"];
	}
	[Symbol.iterator]() {
		let idx = 0;
		let activities = this.activities;
		return {
			next() {
				return idx < activities.length ? {value : activities[idx++], done : false} : {done : true};
			}
		}
	};
}

const cherry = new IterableCat();

for (const activity of cherry) {
  console.log(`고양이가 ${activity}를 한다.`);
}