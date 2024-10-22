function person(name,age){
	this.name = name;
	this.age = age; 
}

person.prototype.introduce = function(){
	console.log(`hi my name is ${this.name} and i'm ${this.age} years old.`);
}

const me = new person('sabyun', 35);

me.introduce();