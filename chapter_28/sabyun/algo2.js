function solution(common) {
	const equal = common[1] - common[0] === common[2] - common[1];;
	if(equal) return common[1] - common[0]; + common.at(common.length-1);
	return common[1]/common[0] * common.at(common.length-1);
}

console.log(solution([1, 2,3]));
console.log(solution([2, 4,8]));
console.log(solution([-1, 2,-4]));