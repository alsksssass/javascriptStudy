console.log(x);  // undefined (var 호이스팅)
// console.log(y);  // ReferenceError (let은 TDZ)

var x = 1;
let y = 2;

function example() {
    var a = 3;
    let b = 4;
    
    if (true) {
        let b = 5;    // 새로운 LexicalEnvironment
        var a = 6;    // 기존 VariableEnvironment 사용
    }
    console.log(a);  // 1
    console.log(b);  // 1
}

example();