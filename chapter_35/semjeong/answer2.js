/*
Chapter 35

### 문제 2
객체를 깊은 복사하는 함수를 스프레드 문법을 사용하여 구현하세요.

*/

// Your solution
let obj = { name: "smj" };
let obj2 = obj;
obj2.name = "asdf";

console.log('without spread op', obj, obj2);

obj2 = { ...obj };
obj2.name = 'smj';
console.log('with spread op', obj, obj2);

// 1 depth만 깊은 복사한다.
obj.arr = [1, 2, 3];
obj2 = { ...obj };
obj2.arr[0] = 10;
console.log(obj, obj2);
