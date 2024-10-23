function Person(name, age) {
  this.name = name;
  this.age = age;
  Person.prototype.introduce = function () {
    console.log(this.name, this.age);
  }
}

const p = new Person("asdf", 15);
p.introduce();