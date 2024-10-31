class Vehicle {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  drive() {
    this.speed++;
  }
  stop() {
    this.speed = 0;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name);
  }

  drive() {
    super.drive();
    console.log("부릉부릉");
  }
}

class Motorcycle extends Vehicle {
  drive() {
    super.drive();
    console.log("부르릉");
  }
}

const car = new Car("차");
const mot = new Motorcycle("오토바이");
car.drive();
console.log(car.speed);
car.stop();
console.log(car.speed);
mot.drive();