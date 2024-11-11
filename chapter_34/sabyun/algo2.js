function solution(numbers) {
	let answer = [];
	for(let i =0; i < numbers.length; i++)
		for(let j = 0; j < numbers.length; j++){
			if(j ===i) continue;
			answer.push(numbers[i] + numbers[j]);
	}
    return [...new Set(answer.sort((a,b)=>a-b))];
}
function solution1(numbers) {
	let answer = [];
	numbers.forEach ((v,i)=>{numbers.forEach((a,b)=> {i!==b ? answer.push(a+v) : null});});
	return[...new Set(answer.sort())];
}

const temp = [];
for(let i =0; i < 100; i++)
	temp.push(Math.floor(Math.random()*100 +1));
console.log(temp);
console.time('double');
console.log(solution(temp));
console.timeEnd('double');
console.time('function');
console.log(solution1(temp));
console.timeEnd('function');