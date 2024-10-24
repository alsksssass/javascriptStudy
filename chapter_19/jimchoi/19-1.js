
function Person(name, age) {
	this.name = name;
	this.age = age;
	
}

Person.prototype.introduce = function (){
	console.log("My name is " + this.name + " and I am " + this.age + " years old.");
}

const jimchoi = new Person("JimChoi", 25);

console.log(jimchoi.introduce());