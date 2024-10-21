class Circle {
	constructor(radius){
		this.radius = radius;
	}

	round(){
		return this.radius * this.radius * Math.PI;
	}
}

Circle.prototype.area = function area(){
	return (this.round() /2) * this.radius;
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
const circle3 = new Circle(20);

console.log(circle1.area(), circle1.round());
console.log(circle2.area(), circle2.round());
console.log(circle3.area(), circle3.round());
