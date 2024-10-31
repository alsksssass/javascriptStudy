class Vehicle {
    constructor() {
        this.type = 'Vehicle';
    }

    describe() {
        console.log(`This is a ${this.type}`);
    }
} 

class Car extends Vehicle {
    constructor(brand) {
        super(); // 부모 클래스 생성자 호출;
        this.type = 'Car';
        this.brand = brand;
    }

    describe() {
        console.log(`This is a ${this.brand} ${this.type}`);
    }
}

class Motorcycle extends Car {
    constructor(brand, modelName) {
        super(brand);
        this.type = 'Motorcycle';
        this.modelName = modelName;
    }

    describe() {
        console.log(`This is a ${this.brand} ${this.type} ${this.modelName}`);
    }
}

const myCar = new Car('Hyundai');
myCar.describe();

const myMotorcycle = new Motorcycle('Hyundai','somilee02');
myMotorcycle.describe();