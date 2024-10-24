function Animal(type) {
    this.type = type;
}

Animal.prototype.move = function() {
    console.log(`${this.type} is moving.`);
};

function Dog(species) {
    this.species = species;
    Animal.call(this, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.species} is barking.`);
}

function Labrador(name) {
    this.name = name;
    Dog.call(this, 'Labrador');
}

Labrador.prototype = Object.create(Dog.prototype);
Labrador.prototype.constructor = Labrador;

const myDog = new Dog('White Labrador');
myDog.move();

const myLabrador = new Labrador('Buddy');
myLabrador.move();
myLabrador.bark();