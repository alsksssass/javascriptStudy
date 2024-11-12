/*
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

function studentAnswer(idx,who){
	if(who === 1) return idx%5+1;
	else if(who ===2 ) { return idx%2 === 0 ? 2 : (
		Math.floor(idx/2)%4 === 0 ? 1 : 
		Math.floor(idx/2)%4 === 1 ? 3 :
		Math.floor(idx/2)%4 === 2 ? 4 : 5
	)};
	return [3,3,1,1,2,2,4,4,5,5][idx%10];
}

function solution(answers) {
	var answer =[];
    answers.map((v,i)=>{
		if(v === studentAnswer(i,1)) answer.find(d=>d.who === 1) ? answer.find(d=>d.who === 1).score++ : answer.push({who : 1, score:1});
		if(v === studentAnswer(i,2)) answer.find(d=>d.who === 2) ? answer.find(d=>d.who === 2).score++ : answer.push({who : 2, score:1});
		if(v === studentAnswer(i,3)) answer.find(d=>d.who === 3) ? answer.find(d=>d.who === 3).score++ : answer.push({who : 3, score:1});
	});
    return answer.sort((a,b)=>a.score > b.score ? -1 : 1).filter((v,i,a)=> v.score === a[0].score).sort((a,b)=>a.who > b.who ? 1 :-1).map(a=>a.who);
}

console.log(solution([1,2,3,4,5]));
console.log(solution([2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]));