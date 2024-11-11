function solution(l, r) {
    var answer = [];
	for(let i = l; i <= r;++i){
		if((String(i).replace(/[05]/g,'')).length === 0)
			answer.push(i);
	}
    return answer.length !== 0 ? answer : [-1];
}
const solution1 = (l, r) => (a = Array.from({length: r-l+1}, (_, i) => l+i).filter(n => String(n).split('').every(d => d === '0' || d === '5'))).length ? a : [-1];
console.time('me');
console.log(solution(5,555));
console.timeEnd('me');
console.time('one');
console.log(solution1(5,555));
console.timeEnd('one');

