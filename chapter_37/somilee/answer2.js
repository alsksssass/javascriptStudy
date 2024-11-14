/*
Chapter 37

### 문제 2
학생들의 성적을 관리하는 시스템을 Map을 사용하여 구현하세요.

*/

class scoreManager {
    constructor() {
        this.map = new Map();
    }

    addStudent(name, score) {
        if(this.map.has(name))
            console.log(`${name}는 이미 존재하는 학생입니다.`);
        else {
            this.map.set(name, score);
            console.log(`${name} 정보를 저장했습니다.`);
        }
    }

    deleteStudent(name) {
        if(!this.map.has(name))
            console.log(`${name}는 존재하지 않는 학생입니다.`);
        else {
            this.map.delete(name);
            console.log(`${name} 정보를 삭제했습니다.`);
        }
    }

    getGrade(name) {
        if(!this.map.has(name))
            console.log(`${name}는 존재하지 않는 학생입니다.`);
        else console.log(`${name}의 점수는 ${this.map.get(name)}입니다.`);
    }
}

const manager = new scoreManager();

// 학생 추가
manager.addStudent("Alice", 90); // Alice 정보를 저장했습니다.
manager.addStudent("Bob", 85);   // Bob 정보를 저장했습니다.
manager.addStudent("Alice", 95);  // Alice는 이미 존재하는 학생입니다.

// 학생 점수 조회
manager.getGrade("Alice"); // Alice의 점수는 90입니다.
manager.getGrade("David");  // David는 존재하지 않는 학생입니다.

// 학생 삭제
manager.deleteStudent("Bob"); // Bob 정보를 삭제했습니다.
manager.deleteStudent("Bob"); // David는 존재하지 않는 학생입니다.