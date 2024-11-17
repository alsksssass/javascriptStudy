/*
Chapter 37

### 문제 3
최근 검색어 기능을 구현하세요. 최대 5개까지 저장하세요.

*/

// Your solution
const readline = require('readline');
let recentlyKeyWords =[];
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

function getword (){
	rl.question('검색어 입력 ' ,(input)=>{
		if(input.toUpperCase() ==='exit'){
			rl.close();
			return;
		}
		console.log(input);
		recentlyKeyWords.push(input);
		console.log(recentlyKeyWords.length);
		recentlyKeyWords = recentlyKeyWords.length > 5 ? recentlyKeyWords.slice(1,6) : recentlyKeyWords;
		console.log('history',recentlyKeyWords);
		getword();
	});
}
getword();