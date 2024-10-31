const students = [
	{ name: "Alice", scores: { math: 85, english: 90, science: 78 } },
	{ name: "Bob", scores: { math: 76, english: 82, science: 88 } },
	{ name: "Charlie", scores: { math: 90, english: 85, science: 91 } },
	{ name: "David", scores: { math: 65, english: 75, science: 70 } },
	{ name: "Eve", scores: { math: 88, english: 92, science: 94 } }
];

//평균점수 계산

function average(arr){
	return[...arr.map(element => { return (Object.values(element.scores).reduce((pre,now,i,{length}) => i !== length -1 ? pre + now : (pre + now) / length, 0))})]
}

console.log(average(students));
//각과목 최고점 찾기

function bestScore(arr){
	return [...arr.map(element =>{ return Object.values(element.scores).reduce((a,b)=> a > b ? a : b)})]
}

console.log(bestScore(students));
// function bestScore(arr){
// 	return [...arr.map(element =>{ return Math.max(...Object.values(element.scores))})]
// }
//특정 점수 이상 학생 필터링.


function tarGetScore(arr,target){
	return [...arr.map(element => {if(Math.max(...Object.values(element.scores)) >= target) return element.name;
	})].filter(name => name !== undefined);
}

console.log(tarGetScore(students,80));