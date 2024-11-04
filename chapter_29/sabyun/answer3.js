function circlePillar(radius,high){
	let volume = Math.PI * (radius ** 2) * high;
	volume = Number.isInteger(volume) ? volume : volume.toFixed(3);
	let surface = 2 * Math.PI * radius *(high + radius);
	surface = Number.isInteger(surface) ? surface : surface.toFixed(3); 
	return `원기둥의 부피는 ${volume} 이고 표면적은 ${surface} 입니다`;
}

console.log(circlePillar(4,4));