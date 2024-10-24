// Q. add, subtract, multiply, divide 함수를 작성하고, 이들을 객체의 메서드로 저장하는 calculator 객체를 생성하세요. 
//    그리고 calculate 함수를 작성하여 연산자와 두 개의 숫자를 입력받아 calculator 객체의 적절한 메서드를 호출하도록 구현하세요.
const calculator = {
    add: function(a, b) {
        return a+b;
    },
    
    subtract: function(a, b) {
        return a-b;
    },
    
    multiply: function(a, b) {
        return a*b;
    },
    
    divide: function(a, b) {
        return a/b;
    }
}

function calculate(cal, a, b) {
    if (cal == '+')
        return calculator.add(a, b);
    else if (cal == '-')
        return calculator.subtract(a, b);
    else if (cal == '*')
        return calculator.multiply(a, b);
    else if (cal == '/')
        return calculator.divide(a, b);
    else
        return ('Wrong Operator\n');
}

console.log(calculate('+',1,2));
console.log(calculate('-',1,2));
console.log(calculate('*',1,2:));
console.log(calculate('/',1,2));
console.log(calculate('/',1,0));
console.log(calculate('=',1,0));