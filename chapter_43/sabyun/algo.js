// k	m	score	result
// 3	4	
const case1 = [1, 2, 3, 1, 2, 3, 1];//	8
// 4	3	

const case2 = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]; //	33

function solution(k, m, score) {
	const box_num = ~~(score.length / m) * m;
	const temp = score.sort((a,b)=>b-a).slice(0,box_num);
	// console.log('num=', m, 'box = ', box_num);
	let answer = 0;
	let tempscore = 0;
	for(let i =0; i <= temp.length; i++){
		if(i % m === 0){
			answer += tempscore * m;
			tempscore = k;
			continue;
		}
		if(tempscore >temp[i]) tempscore = temp[i];
		// console.log(tempscore,answer);
	}
    return answer;
}

console.log(solution(3,4,case1));
console.log(solution(4,3,case2));