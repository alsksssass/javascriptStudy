function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.printInfomation = function() {
        console.log(`name = ${this.name}, age = ${this.age}, grade = ${this.grade}`);
    };
}
const student = new Student('somilee', 26, 4);

student.printInfomation();