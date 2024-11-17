
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