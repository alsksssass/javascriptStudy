class Point {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}

	static crossLength(a, b) {
		return Math.abs(a.x * b.y - b.x * a.y);
	}

	static vector(a, b) {
		return new Point(b.x - a.x, b.y - a.y);
	}

	static calcLength(a, b) {
		return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	}

	vector(o) {
		return Point.vector(this, o);
	}

	crossLength(o) {
		return Point.crossLength(this, o);
	}

	calcLength(o) {
		return Point.calcLength(this, o);
	}
}

function circle(c, p) {
	const r = Point.calcLength(c, p);
	return {length: 2 * Math.PI * r, area: 2 * Math.PI * Math.pow(r, 2)};
}

function triangle(a, b, c) {
	return {
		length: a.calcLength(b) + b.calcLength(c) + c.calcLength(a),
		area: a.vector(b).crossLength(Point.vector(a, c)) / 2
	};
}

function square(...arr) {
	if (arr.length != 4) return null;
	arr.sort((a, b) => a.x == b.x ? a.y - b.y : a.x - b.x);
	return {
		length: arr[0].calcLength(arr[1]) + arr[0].calcLength(arr[2])
			+ arr[3].calcLength(arr[1]) + arr[3].calcLength(arr[2]),
		area: arr[0].vector(arr[1]).crossLength(Point.vector(arr[0], arr[2]))
	};
}

console.log(circle(new Point(0, 0), new Point(1, 1)));
console.log(triangle(new Point(0, 0), new Point(0, 4), new Point(4, 0)));
console.log(square(new Point(0, 0), new Point(0, 4), new Point(4, 0), new Point(4, 4)));