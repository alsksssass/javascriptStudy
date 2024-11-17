function solution(ingredient) {
	const stack = [];
	let answer = 0;

	for (let i = 0; i < ingredient.length; i++) {
		stack.push(ingredient[i]);

		if (stack.length >= 4) {
			if (stack[stack.length - 4] === 1 &&
				stack[stack.length - 3] === 2 &&
				stack[stack.length - 2] === 3 &&
				stack[stack.length - 1] === 1) {
				stack.pop();
				stack.pop();
				stack.pop();
				stack.pop();
				answer++;
			}
		}
	}

	return answer;
}
const arr1 = [2, 1, 1, 2, 3, 1, 2, 3, 1];	//2
const arr2 = [1, 3, 2, 1, 2, 1, 3, 1, 2]; //0


console.log(solution(arr1));
console.log(solution(arr2));