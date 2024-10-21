//학생 정보를 관리하는 Student 생성자 함수를 작성하세요.
//이 함수는 이름, 나이, 학년을 프로퍼티로 가지며, 학생 정보를 출력하는 메서드를 포함해야 합니다.
function Student(name, age, grade) {
	this.name = name;
	this.age = age;
	this.grade = grade;
	this.printStudentInfo = function () {
		console.log("name = " + this.name + ", age = " + this.age + ", grade = " + this.grade);
	}
}


// test
const s1 = new Student("james", 13, 22);
s1.printStudentInfo();