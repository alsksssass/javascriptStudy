const calculator = {
    name: 'Sominlee Calculator',
    add(a, b) {
        console.log(`${this.name} : ${a + b}`);
    },
    subtract(a, b) {
        console.log(`${this.name} : ${a - b}`);
    },
    multiply(a, b) {
        console.log(`${this.name} : ${a * b}`);
    },
    divide(a, b) {
        console.log(`${this.name} : ${a / b}`);
    }
};

calculator.add(4, 2);       // 6
calculator.subtract(4, 2);  // 2
calculator.multiply(4, 2);  // 8
calculator.divide(4, 2);    // 2

/*
<메서드 축약표현>
1. 문법의 간결함 : function 키워드 생략
2. this 바인딩 : this는 해당 객체 참조 -> 객체 속성에 접근 가능
*/