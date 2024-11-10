function solution(l, r) {
    var answer = [];
	for(let i = l; i <= r;++i){
		if((String(i).replace(/[05]/g,'')).length === 0)
			answer.push(i);
	}

    return answer.length === 0 ? answer : [-1];
}

console.log(solution(5,555));