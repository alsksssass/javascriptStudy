/**
 * 상속을 사용하여 Vehicle, Car, Motorcycle 클래스를 구현하세요. 
 * 각 클래스는 적절한 속성과 메서드를 가져야 하며, 오버라이딩을 통해 각각의 특성을 구현하세요.
 */

class Vehicle {
	f() {
		console.log("1\n");
	}
}

class Car extends Vehicle {
	f() {
		super.f();
		console.log("2\n");
	}
}

class Motorcycle extends Car {
	f() {
		super.f();
		console.log("3\n");
	}
}

const myCar = new Motorcycle;

myCar.f();