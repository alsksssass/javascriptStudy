/*
Chapter 37

### 문제 2
학생들의 성적을 관리하는 시스템을 Map을 사용하여 구현하세요.

*/

// Your solution
const studentsData = [
	{name: 'sabyn', score: {math: 100, korean: 50, english: 88, science: 95, history: 78}},
	{name: 'john', score: {math: 85, korean: 92, english: 76, science: 88, history: 94}},
	{name: 'emily', score: {math: 95, korean: 88, english: 92, science: 75, history: 86}},
	{name: 'david', score: {math: 78, korean: 96, english: 84, science: 92, history: 89}},
	{name: 'sarah', score: {math: 92, korean: 85, english: 90, science: 88, history: 92}},
	{name: 'mike', score: {math: 88, korean: 90, english: 95, science: 82, history: 78}},
	{name: 'lisa', score: {math: 96, korean: 82, english: 88, science: 94, history: 85}},
	{name: 'james', score: {math: 82, korean: 94, english: 86, science: 78, history: 96}},
	{name: 'emma', score: {math: 90, korean: 89, english: 92, science: 86, history: 84}},
	{name: 'alex', score: {math: 87, korean: 91, english: 84, science: 90, history: 88}}
 ];

class scoreSystem{
	constructor(data){
		this.data = data;
	}
	getScore(type){
		return this.data.map(d=>{return { name : d.name , [type] : d.score[type]}});
	}
	getAverage(){
		return Number(this.data.map(d=>Object.values(d.score).reduce((a,b)=>a+b,0)/Object.values(d.score).length).reduce((a,b)=>a+b,0)/this.data.length).toFixed(2);
	}
	getHighScore(){
		const eliteNmae = {};
		Object.keys(this.data[0].score).map(a => eliteNmae[a] =(this.getScore(a).reduce((p,c)=> p[a] > c[a] ? p : c)));
		return eliteNmae;
	}
}

const sytem = new scoreSystem(studentsData);
console.log(sytem.getScore('korean'));
console.log(sytem.getAverage());
console.log(sytem.getHighScore());
