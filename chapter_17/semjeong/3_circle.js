function Circle(radius) {
	if (!(this instanceof Circle) || !new.target) {
		return new Circle(radius);
	}
	this.radius = radius;
	Object.defineProperties(this, {
		area: {
			get() {
				return this.radius * this.radius * Math.PI;
			}
		},
		circum: {
			get() {
				return 2 * this.radius * Math.PI;
			}
		}
	});
}

function printCircleInfo(circle) {
	console.log(`[Circle] radius - ${circle.radius}, area - ${circle.area}, 원주 - ${circle.circum}`);
}

const a = new Circle(1);
const b = Circle(2);
printCircleInfo(a);
printCircleInfo(b);
printCircleInfo(new Circle(10));