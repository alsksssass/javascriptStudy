function Student(name, age, grade) {
	this.name = name;
	this.age = age;
	this.grade = grade;
	this.printInfo = function () {
		console.log('Student', this.name, this.age, this.grade);
	};
}

const student = new Student("semjeong", 26, null);
student.printInfo();