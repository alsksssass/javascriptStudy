// 상속을 사용하여 `Vehicle`, `Car`, `Motorcycle` 클래스를 구현하세요.
// 각 클래스는 적절한 속성과 메서드를 가져야 하며, 오버라이딩을 통해 각각의 특성을 구현하세요.

class Vehicle {
	constructor() {};

	move() {
		console.log("move..");
	}
}

class Car extends Vehicle {
	#trunk;
	#airbag;
	constructor(energySource) {
		super();
		this.energySource = energySource;
	}
	move() {
		console.log(`${this.energySource} car is moving skrrr`);
	}
}

class Motorcycle extends Vehicle {
	#helmet;
	constructor(brand) {
		super();
		this.brand = brand;
	}
	move() {
		console.log(`${this.brand} motorcycle is moving grrrrr`);
	}
}

const vehicle1 = new Vehicle();
vehicle1.move();

const car1 = new Car("electric");
car1.move();

const motorcycle1 = new Motorcycle("honda");
motorcycle1.move();