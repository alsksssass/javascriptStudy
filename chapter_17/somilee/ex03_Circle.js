function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    };
    this.getArea = function() {
        return this.radius*this.radius*3.14;
    };
}
const circle1 = new Circle(1);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle1.getArea());
console.log(circle2.getDiameter());
console.log(circle2.getArea());