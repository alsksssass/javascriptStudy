function solution(common) {
    var answer = 0;

	const d1 = common[1] - common[0];
	const d2 = common[2] - common[1];

	if (d1 === d2) { //등차
		return common[common.length - 1] + d1;
	} else {
		return common[common.length - 1] * (common[1] / common[0])
	}
}