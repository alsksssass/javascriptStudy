function solution(babbling) {
	const words = {
		a: 'aya',
		y: 'ye',
		w: 'woo',
		m: 'ma',
	}
	const ret = [];
	for (let i = 0; i < babbling.length; i++) {
		let prevWord = '';
		let tempWords = '';
		let cur = words[babbling[i][0]];
		while (cur) {
			if (cur === prevWord) break;
			prevWord = cur;
			tempWords += cur;
			cur = words[babbling[i][tempWords.length]];
		}
		if (tempWords === babbling[i]) ret.push(babbling[i]);
	}
	return ret.length
}