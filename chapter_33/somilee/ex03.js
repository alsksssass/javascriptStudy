// Q. 내장 심볼(Built-in Symbol)을 사용하여 객체의 기본 동작을 커스터마이징하는 예제를 만드세요. 
// (Symbol.toPrimitive, Symbol.toStringTag 등 활용)

const myObject = {
    value: 10,
    [Symbol.toPrimitive](input) {
        if (input === "number") {
            return this.value;
        }
        if (input === "string") {
            return `The value is ${this.value}`;
        }
        return this.value;
    }
};

// 숫자 컨텍스트
console.log(-myObject); // -10 (input: "number")

// 문자열 컨텍스트
console.log(`${myObject}`); // "The value is 10" (input: "string")

// 기본 컨텍스트
console.log(myObject + 5); // 15 (input: "default")
