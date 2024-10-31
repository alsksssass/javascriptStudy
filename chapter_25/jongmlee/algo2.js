function solution(dots) {
    var answer = 0;
	if (getInclination(dots[0], dots[1]) === getInclination(dots[2], dots[3]) || 
		getInclination(dots[0], dots[2]) === getInclination(dots[1], dots[3]) || 
		getInclination(dots[0], dots[3]) === getInclination(dots[1], dots[2]))
    return answer;
}

function getInclination(dot1, dot2) {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    return (y2 - y1) / (x2 - x1);
}