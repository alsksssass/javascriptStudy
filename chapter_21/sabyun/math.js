const arr = [23, 5, 67, 12, 45, 89, 3, 19]; // 예제 배열

function minValue(arr){
	return Math.min(...arr);
}

function maxValue(arr){
	return Math.max(...arr);
}

function averageValue(arr){
	return (maxValue(arr) + minValue(arr)) / 2
}

console.log(minValue(arr));
console.log(maxValue(arr));
console.log(averageValue(arr));
