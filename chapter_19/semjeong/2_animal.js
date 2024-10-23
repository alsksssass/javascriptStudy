const Animal = (function () {
  function Animal() {}
  Animal.prototype.breathe = () => {
    console.log('breathing');
  }
  return Animal;
}());
// console.log(Animal.prototype);

const Dog = (function () {
  function Dog() {}

  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.bark = () => {
    console.log('barking');
  }
  return Dog;
}());

const Labrador = (function () {
  function Labrador() { };
  Labrador.prototype = Object.create(Dog.prototype);
  Labrador.prototype.run = () => {
    console.log('running');
  }
  return Labrador;
}());

const lab = new Labrador();
lab.breathe();
lab.bark();
lab.run();




// const Dog = Object.create(Animal.prototype);
// Dog.prototype.bark = () => {
//   console.log(this.name, 'is barking');
// }
// console.log(Dog.prototype)
// console.log(Animal.prototype)
// const d = new Dog("asdf");
// d.breathe();

// const labrador = Object.create(dog2.prototype);
// labrador.prototype.smile = () => {
//   console.log(this.name, 'is smiling');
// }

// labrador.breathe();
// labrador.bark();
// labrador.smile();

// const Dog = (function () {
//   function Dog(name) {
//     this.name = name;
//   }

//   Dog.prototype = Animal.prototype;
//   return Dog;
// }());

// const dog = new Dog("asdf");
// console.log(dog.test);
