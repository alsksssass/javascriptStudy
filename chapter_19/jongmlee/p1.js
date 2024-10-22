// Person 생성자 함수를 만들고, 프로토타입을 이용해 모든 인스턴스가 공유하는 introduce 메서드를 추가하세요.
// 이 메서드는 person의 이름과 나이를 출력해야 합니다.

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.introduce = function () {
	console.log(`name : ${this.name}, age : ${this.age}`);
}

let p1 = new Person("Lebron", 42);
let p2 = new Person("Brony", 20);
p1.introduce();
p2.introduce();
