function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
}

const person1 = new Person('somilee', 26);
person1.introduce();