// `Math` 객체를 사용하여 주어진 배열에서 최대값과 최소값을 찾고,
// 모든 요소의 합과 평균을 계산하는 함수를 작성하세요.

function solve (arr) {
	console.log("max = " + Math.max(...arr));
	console.log("min = " + Math.min(...arr));
	const sum = arr.reduce((acc, v) => {
		return acc + v;
	}, 0)
	console.log("sum = " + sum);
	console.log("avg = " + sum / arr.length);
}

const arr = [1, 2, 3, 4, 5, 6];
solve(arr);