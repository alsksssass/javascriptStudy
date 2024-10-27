function Animal(name) {
	this.name = name;
  }
  
  Animal.prototype.getName = function () {
	return this.name;
  };
  
  function Dog(name) {
	Animal.call(this, name);
  }
  Animal.prototype.makeSound = function () {
	return "멍멍";
  };
  
  Dog.prototype = Object.create(Animal.prototype);
//   Dog.prototype.constructor = Dog;
  console.log(Dog.prototype instanceof Animal);


  function Labrador(name) {
	Dog.call(this, name);
  }
  
  Labrador.prototype = Object.create(Dog.prototype);
//   Labrador.prototype.constructor = Labrador;
  

  Labrador.prototype.skill = function () {
	return "귀여움";
  };

  const dog = new Labrador("멍멍이");
  
  
  console.log(dog instanceof Dog);
  console.log(dog instanceof Animal);
  console.log(Labrador instanceof Dog);
  
  console.log(`이름 : ${dog.getName()}
  소리 : ${dog.makeSound()}
  개인기 : ${dog.skill()}`);