
const getDistance = (dot1, dot2)=> {
	return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
}

function solution(dots) {
if (getDistance(dots[0], dots[1]) === getDistance(dots[2], dots[3])) 
	return 1;
else if (getDistance(dots[0], dots[2]) === getDistance(dots[1], dots[3])) 
	return 1;
else if (getDistance(dots[0], dots[3]) === getDistance(dots[1], dots[2])) 
	return 1;

return 0;
}