function solution(numbers) {
	let answer = [];
	for(let i =0; i < numbers.length; i++)
		for(let j = 0; j < numbers.length; j++){
			if(j ===i) continue;
			answer.push(numbers[i] + numbers[j]);
	}
    return [...new Set(answer.sort((a,b)=>a-b))];
}

console.log(solution([2,1,3,4,1]));