

function solution(k, tangerine) {
	const temp = {};
	tangerine.map((t) => temp[t] ? temp[t]++ : temp[t] = 1);
	let total = 0;
	const arr =Object.values(temp).sort((a,b)=>b-a);
	for(let i = 0; i <= arr.length; i++){
		if(total >= k) return i;
		total += arr[i]; 
	}
}


const arr1 = [1, 3, 2, 5, 4, 5, 2, 3];//	3
const arr2 = [1, 3, 2, 5, 4, 5, 2, 3]; //	2
const arr3 = [1, 1, 1, 1, 2, 2, 2, 3];//1

console.log(solution(6,arr1));
console.log(solution(4,arr2));
console.log(solution(2,arr3));