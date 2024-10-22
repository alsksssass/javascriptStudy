// 프로토타입 체인을 이용하여 Animal, Dog, Labrador 객체를 생성하고,
// 각각의 프로토타입에 적절한 메서드를 추가하세요.
// 그리고 Labrador 인스턴스를 만들어 모든 메서드를 호출해보세요.

function Animal() {
	this.heart;
}

Animal.prototype.breath = function() {
	console.log("후 하 후 하")
}

function Dog() {
	this.mouth;
}

Dog.prototype = Object.create(Animal.prototype);

console.log(Dog.prototype);

Dog.prototype.bark = function() {
	console.log("멍 멍");
}

function Labrador() {
	this.master;
}

Labrador.prototype = Object.create(Dog.prototype);

Labrador.prototype.hand = function() {
	console.log("손");
}

console.log(Labrador.prototype);

const dog1 = new Labrador();
dog1.hand();
dog1.bark();
dog1.breath();
