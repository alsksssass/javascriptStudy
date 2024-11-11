/*
Chapter 33

### 문제 3
내장 심볼(Built-in Symbol)을 사용하여 객체의 기본 동작을 커스터마이징하는 예제를 만드세요. (Symbol.toPrimitive, Symbol.toStringTag 등 활용)

*/

// Your solution

const BuiltInSymbol= {
    value: 1,
    [Symbol.toPrimitive](input) {
        if (input === "number") {
            return this.value;
        }
        if (input === "string") {
            return `${this.value}`;
        }
        return this.value;
    }
};
