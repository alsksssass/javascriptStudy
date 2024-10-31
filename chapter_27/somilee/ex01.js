function score(students) {
    this.getMathAverage = function() {
        return students.reduce((acc, n) => acc + n.math, 0) / students.length;
    }
    this.getEnglishAverage = function() {
        return students.reduce((acc, n) => acc + n.english, 0) / students.length;
    }
    this.getKoreanAverage = function() {
        return students.reduce((acc, n) => acc + n.korean, 0) / students.length;
    }
    this.getUpperStudent = function(score) {
        return students.filter(n => (n.math + n.english + n.korean) / 3 >= score).map(n => n.name);
    }
    this.topMathStudent = function() {
        return students.reduce((topStudent, n) => n.math > topStudent.math ? n : topStudent).name;
    }
    this.topEnglishStudent = function() {
        return students.reduce((topStudent, n) => n.english > topStudent.english ? n : topStudent).name;
    }
    this.topKoreanStudent = function() {
        return students.reduce((topStudent, n) => n.korean > topStudent.korean ? n : topStudent).name;
    }
}

const students = [
    { name: "김철수", math: 85, english: 78, korean: 92 },
    { name: "이영희", math: 90, english: 88, korean: 76 },
    { name: "박민수", math: 76, english: 82, korean: 85 },
    { name: "최수정", math: 95, english: 94, korean: 89 },
    { name: "정재훈", math: 68, english: 72, korean: 80 }
];

const Class1 = new score(students);
console.log(Class1.getMathAverage());
console.log(Class1.getEnglishAverage());
console.log(Class1.getKoreanAverage());
console.log(Class1.getUpperStudent(85));
console.log(Class1.topMathStudent());
console.log(Class1.topEnglishStudent());
console.log(Class1.topKoreanStudent());