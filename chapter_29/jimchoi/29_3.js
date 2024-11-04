/**
 * 원주율(π)을 사용하여 원기둥의 부피와 표면적을 계산하는 함수를 작성하세요. 
 * 결과값을 원하는 소수점 자리수로 반올림할 수 있도록 구현하세요.
 */

const calculateVolume = (radius, height, round)=>{
	return (Math.PI * Math.pow(radius, 2) * height).toFixed(round);
}
const calculateSurfaceArea = (radius, height, round)=>{
	const result = ((2 * Math.PI * radius )* height) + 2* (Math.PI * Math.pow(radius, 2));
	return (result.toFixed(round));
}

const radius = 5;
const height = 10; 
const round = 3; 

console.log(calculateVolume(radius, height, round))
console.log(calculateSurfaceArea(radius, height, round))