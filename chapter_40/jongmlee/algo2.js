function solution(cards1, cards2, goal) {
	var answer = "Yes";
	let pos1 = -1;
	let pos2 = -1;
  
	for (const g of goal) {
	  if (cards1[pos1 + 1] === g) pos1++;
	  else if (cards2[pos2 + 1] === g) pos2++;
	  else {
		answer = "No";
		break;
	  }
	}
	return answer;
  }