function failRate(N,stages){
	return stages.reduce((a,b)=>{
		return b === N ? a + 1 : a
	}, 0)/stages.reduce((a,b)=>{
		return b >= N ? a + 1 : a
	}, 0);
}
function solution(N, stages) {
    return Array.from({length:N},(_,i)=>({num:i+1,rate:failRate(i+1,stages)})).sort((a,b)=>{if(a.rate > b.rate) return -1; else if (a.rate < b.rate) return 1;return a.num > b.num ? 1:-1;}).map(a=>a.num);
}

// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
/*
실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
*/
const stages = [2, 1, 2, 6, 2, 4, 3, 3]; 
console.log(solution(5,stages));
// console.log('failRate: ', failRate(1,stages));