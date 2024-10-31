const person = {
    name: "Somilee",
    regularFunc: function() {
        console.log(this.name);
		console.log(arguments);
    },
    arrowFunc: () => {
        console.log(this.name);
		console.log(arguments);
    }
};

person.regularFunc(1,2,3);  // "Somilee" [1,2,3]
person.arrowFunc(1,2,3);    // "undefined", 오류 발생: 화살표 함수는 arguments가 없음

const RegularFunc = function(name) {
    this.name = name;
};
const ArrowFunc = (name) => {
    this.name = name;
};

const regularInstance = new RegularFunc("Alice"); // 정상 작동
//const arrowInstance = new ArrowFunc("Alice");     // 오류 발생 : 생성자로 사용 불가능(자체적인 this바인딩)
