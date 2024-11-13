/*
Chapter 37

### 문제 2
학생들의 성적을 관리하는 시스템을 Map을 사용하여 구현하세요.

*/

// Your solution

class GradeManager {
	#gradeMap = new Map();
	addStudent(name, grade) {
		this.#gradeMap.set(name, grade);
		return this;
	}
	getStudentGrade(studentName) {
		if (this.#gradeMap.has(studentName)) {
			return this.#gradeMap.get(studentName);
		}
		console.log("그런 학생은 없어");
	}
	deleteStudent(studentName) {
		if (this.#gradeMap.has(studentName)) {
			this.#gradeMap.delete(studentName);
			console.log(`${studentName} 삭제 성공`);
			return this;
		}
		console.log("그런 학생은 없어");
	}
	getAvg() {
		return [...(this.#gradeMap)].reduce((acc, cur) => acc + cur[1], 0) / this.#gradeMap.size;
	}
}

const gradeManager = new GradeManager();

gradeManager.addStudent("jongmlee", 100)
.addStudent("sabyun", 5)
.addStudent("jimchoi", 0)
.addStudent("somilee", 4);

console.log(gradeManager.getStudentGrade("jongmlee"));
console.log(gradeManager.getStudentGrade("sabyun"));
console.log(gradeManager.getStudentGrade("jimchoi"));
console.log(gradeManager.getStudentGrade("somilee"));

gradeManager.deleteStudent("jimchoi");
gradeManager.getStudentGrade("jimchoi")

console.log(gradeManager.getAvg());