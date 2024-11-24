/*
Chapter 37

### 문제 3
최근 검색어 기능을 구현하세요. 최대 5개까지 저장하세요.

*/

// Your solution
class SearchEngine {
	#words;
	constructor() {
		this.#words = new Map();
		this.db = new Map();
	}

	addDB(key, value) {
		if (typeof key !== 'string') return false;
		this.db.set(key, value);
		return true;
	}

	search(word) {
		if (typeof word !== 'string') return false;
		if (this.#words.size >= 5) {
			const map = new Map();
			const min = Math.min(...Array.from(this.#words.values()));
			for (let e of this.#words.entries()) {
				if (e[1] !== min)
					map.set(e[0], e[1] - 1);
			}
			this.#words = map;
			console.log(map);
		}
		const max = Math.max(Math.max(...Array.from(this.#words.values())), 0);
		this.#words.set(word, max + 1);
		return this.db.get(word);
	}

	showRecent() {
		Array.from(this.#words.entries())
			.sort((a, b) => b[1] - a[1])
			.forEach((v, i) => console.log(i, ":", v[0]));
		// undefined가 어디서 출력되는지를 모르겠네요...
	}
}

const e = new SearchEngine();
e.addDB('a', 'apple');
e.addDB('b', 'bird');
e.addDB('c', 'cap');
e.addDB('d', 'dog');
e.addDB('e', 'ear');
e.addDB('f', 'fly');
console.log(e.search('a'));
console.log(e.search('b'));
console.log(e.search('c'));
console.log(e.showRecent());
console.log(e.search('c'));
console.log(e.search('b'));
console.log(e.search('a'));
console.log(e.showRecent());
console.log(e.search('d'));
console.log(e.search('e'));
console.log(e.search('f'));
console.log(e.showRecent());



