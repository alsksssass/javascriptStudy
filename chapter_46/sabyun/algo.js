
function solution(babbling) {
	var answer = 0;
	const say = ["aya", "ye", "woo", "ma"];
	for (let a of babbling){
		let pre = -1;
		for(let b = 0; b < say.length; b++){
			if(pre !== b && a.search(say[b]) === 0){
			a = a.slice(say[b].length);
			pre = b;
			b = -1;
			}
		}
		if(a.length == 0) answer++;
	}
    return answer;
}

const case1 = ["aya", "yee", "u", "maa"];//	1
const case2 = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];//	2
const case3 = ["ayayeayayeaya"]; // 1

// console.log(solution(case1));
// console.log(solution(case2));
 console.log(solution(case3));