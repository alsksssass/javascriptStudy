
class Vehicle{
	constructor(type,wheel){
		this.type = type;
		this.wheel = wheel;
	}
	intro(){
		return `this is ${this.type}, and have a ${this.wheel} wheel`;
	}
}

class Car extends Vehicle {
	constructor(){
		super('Car',4);
		this.door = true;
	}
	intro(){
		return `${super.intro()} and door ${this.door ? 'too': 'not exist'}`;
	}
}

class Motorcycle extends Vehicle {
	constructor(){
		super('Motorcycle',2);
		this.helmet = true;
	}
	intro(){
		return `${super.intro()} and helmet ${this.helmet ? 'too': 'not exist'}`;
	}
}

const myCar = new Car();
const myMotorcycle = new Motorcycle();

console.log(myCar.intro());
console.log(myMotorcycle.intro());