/*
Chapter 36

### 문제 3
중첩된 객체에서 특정 깊이의 값만 추출하는 함수를 구현하세요.

*/

// Your solution
const data = {
    level1: {
        level2: {
            level3: {
                key: "value"
            },
            level3_other: "another value"
        },
        level2_other: "yet another value"
    }
};

const { level1: { level2 } } = data;
const result = {level2};
console.log(result);