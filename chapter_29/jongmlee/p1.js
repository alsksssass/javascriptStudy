// 주어진 좌표들로 이루어진 도형의 넓이와 둘레를 계산하는 함수를 구현하세요.
// Math 객체의 다양한 메서드를 활용하세요.

function getArea(points) {
	let area = 0;
	for (let i = 0; i < points.length; i++) {
		const [x1, y1] = points[i];
		const [x2, y2] = points[(i + 1) % points.length];

		area += (x1 * y2) - (y1 * x2);
	}
	area = Math.abs(area) / 2;
	return area;
}

console.log(getArea([[0, 0], [2, 0], [2, 2], [0, 2]])); 

console.log(getArea([[0, 0], [3, 0], [3, 4]])); 

console.log(getArea([[0, 0], [4, 0], [5, 3], [2, 5], [-1, 3]]));