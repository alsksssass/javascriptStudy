
const card1 = ["i", "water", "drink"];
const card2 = ["want", "to"];
const global = ["i", "want", "to", "drink", "water"];

function solution(cards1, cards2, goal) {
	answer = "";
	goal.map(v =>{
		if(v === cards1[0]) {
			cards1.shift();
		}
		else if(v === cards2[0])
			cards2.shift();
		else
			answer = 'No';
	})
    return answer || 'Yes';
}

console.log(solution(card1,card2,global));

function solution(ingredient) {
	let answer = 0;
	for (let i = 0; i < ingredient.length - 4; i++) {
		if (ingredient[i]) {
			answer++
			string = string.replace("1231", "");
		}
		else
			break;
	}
	return answer;
}
