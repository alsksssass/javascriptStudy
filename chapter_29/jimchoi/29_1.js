/**
 * 주어진 좌표들로 이루어진 
 * 도형의 넓이와 둘레를 계산하는 함수를 구현하세요.
 *  Math 객체의 다양한 메서드를 활용하세요.
 */


class Point {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
}

const distance = (p1, p2)=> {
	return (Math.sqrt(Math.pow(p2.x-p1.x, 2) + Math.pow(p2.y-p1.y, 2)));
}

const getPerimeter = (points) => {
	let result = 0;
	let p1, p2;
	for(let i=0; i < points.length; i++) {
		p1 = points[i];
		if (i + 1 != points.length)
			p2 = points[i + 1];
		else 
			p2 = points[0];
		result += distance(p1, p2);
	}
	return result;
}

const getArea = (points) => {
	let result = 0;
	let p1, p2;
	for(let i=0; i < points.length; i++) {
		p1 = points[i];
		if (i + 1 != points.length)
			p2 = points[i + 1];
		else 
			p2 = points[0];
		result += (p1.x * p2.y) - (p2.x * p1.y);  //신발끈공식 
	}
	return result / 2;
}


const polygonPoints = [
	new Point(0, 0),
	new Point(4, 0),
	new Point(4, 3),
	new Point(0, 3)
];

console.log(getPerimeter(polygonPoints))
console.log(getArea(polygonPoints))