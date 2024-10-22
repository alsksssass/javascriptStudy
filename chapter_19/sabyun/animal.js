function animal(type){
	this.type = type;
}

animal.prototype.typePrint = function(){ console.log(`animal type is ${this.type}`)};

function dog(race){
	animal.call(this,'mammal');
	this.race = race;
}
dog.prototype.racePrint = function(){console.log(`dog race is ${this.race}`)};

function labrador(name){
	dog.call(this,'dog');
	this.name = name;
}
dog.prototype.dogName = function(){console.log(`labrador name is ${this.name}`)};

Object.setPrototypeOf(dog.prototype,animal.prototype);
Object.setPrototypeOf(labrador.prototype,dog.prototype);


const pet = new labrador('ggami');

pet.typePrint();
pet.racePrint();
pet.dogName();



//class

/*
class Animal {
    constructor(type) {
        this.type = type;
    }
    
    typePrint() {
        console.log(`animal type is ${this.type}`);
    }
}

class Dog extends Animal {
    constructor(race) {
        super('mammal');  // 부모 클래스의 생성자 호출
        this.race = race;
    }
    
    racePrint() {
        console.log(`dog race is ${this.race}`);
    }
}

class Labrador extends Dog {
    constructor(name) {
        super('dog');  // 부모 클래스의 생성자 호출
        this.name = name;
    }
    
    dogName() {
        console.log(`labrador name is ${this.name}`);
    }
}

const pet = new Labrador('ggami');

pet.typePrint();   // animal type is mammal
pet.racePrint();   // dog race is dog
pet.dogName();     // labrador name is ggami

*/