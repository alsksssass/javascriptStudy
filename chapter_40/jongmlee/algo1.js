function solution(ingredient) {
	let answer = 0
	for (let i = 0; i <= ingredient.length - 4; i++) {
	  if (ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
		answer++
		ingredient.splice(i, 4)
		if (ingredient.length < 4) break
		i -= 3
	  }
	}
	return answer
  }