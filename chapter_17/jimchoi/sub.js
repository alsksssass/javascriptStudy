console.log("Hello World")
// 입력
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.on('line', function(line) {
//   input = line.split(' ');
// })

//17장 문제 1
console.log("17-1");
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;

  this.print = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  };
}


const student1 = new Student("Alice", 20, "Sophomore");
student1.print(); 

//문제 2 
/*
생성자 함수로 객체를 생성했을 때 this가 해당 객체를 참조할 수 있다. 일반함수는 전역객체나 호출하는 개체를 가리킴
new 없ㄱ이 호출하면 this가 전역객체를 참조하거나 이상한 값을 참조할수도
*/
console.log("17-2");
console.log(`생성자 함수로 객체를 생성했을 때 this가 해당 객체를 참조할 수 있다. 일반함수는 전역객체나 호출하는 개체를 가리킴
new 없ㄱ이 호출하면 this가 전역객체를 참조하거나 이상한 값을 참조할수도`);

//문제 3
console.log("17-3");
function Circle(radius) {
    this.radius = radius;

    this.getArea = function() {
        return 3.14 * this.radius * this.radius;
    };

    this.getCircumference = function() {
        return 2 * 3.14 * this.radius;
    };
}
const circle1 = new Circle(3);
console.log(circle1.getArea(), circle1.getCircumference());


//18장
console.log("18-1");
function measureTime(func) {
  const start = Date.now();
  func(); 
  const end = Date.now();
  return end - start; 
}

function example() {
  for (let i = 0; i < 1000000; i++) {}
//   await new Promise((resolve) => {
//     setTimeout(()=> {
//       console.log("test");
//       resolve();
//     }, 100)

//   }
  
}

const time = measureTime(example);
console.log(time);

/*
문제 2
함수가 일급 객체라는것은 함수를 변수에 할당하거나 함수의 인자로 전달이 가능하다는 것이다. 
고차함수를 만들어 사용할 수 있고 콜백함수 등 간결하고 재사용 가능한 코드 작성 가능
*/
console.log("18-2");
console.log(`함수가 일급 객체라는것은 함수를 변수에 할당하거나 함수의 인자로 전달이 가능하다는 것이다. 
고차함수를 만들어 사용할 수 있고 콜백함수 등 간결하고 재사용 가능한 코드 작성 가능`);

//문제 3
console.log("18-3");
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      return "Error: Division by zero";
  }
  return a / b;
}

const calculator = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

function calculate(operator, a, b) {
  if (calculator[operator]) {
      return calculator[operator](a, b);
  } else {
      return "Error: Invalid operator";
  }
}

console.log(calculate("+", 1, 1)); 
console.log(calculate("-", 2, 1)); 
console.log(calculate("*", 2, 2));
console.log(calculate("/", 6, 2)); 



// console.log("algo - 1");
// const arr = [1, 2, 3, 4, 5];

// function solution(arr, k) {

//     if (k % 2 === 1)
//         return (arr.map(i => i *k));
//     else 
//         return (arr.map(i => i + k));

// }

// console.log(solution(arr, 2));

