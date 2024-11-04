
function diceSimulater(spot,num){
	const data = []
	for(let i = 0; i < num; i++){
		data.push(Math.floor(Math.random() * (spot))+1);
	}
	function average(data){
		return data.reduce((a,b,i)=> i !== data.length -1 ? a+b : a/data.length,0);
	}
	function commonValue(data){
		const rank = [];
		data.forEach(element => {
			rank[element] ? rank[element]++:rank[element] = 1
		});
		console.log('각 주사위눈의 갯수',rank);
		return rank.indexOf(rank.reduce((a,b) => a > b ? a:b));
	}
	function sprad(data){
		const aver = average(data);
		const list = [];
		data.forEach(element => list.push((element-aver) ** 2));
		return average(list).toFixed(3);
	}
	console.log('주사위 시뮬레이션 결과',data,'average', average(data),'commomValue', commonValue(data),'sprad',sprad(data));
}

diceSimulater(7,100);