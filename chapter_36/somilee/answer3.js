/*
Chapter 36

### 문제 3
중첩된 객체에서 특정 깊이의 값만 추출하는 함수를 구현하세요.

*/
const data = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: {
            f: 3
        }
    },
    g: 4,
    h: {
        i: 5
    },
    j: 6
};

function findDepth(num) {
    switch(num) {
        case 1:
            const { g, j } = data;
            return { g, j };
        case 2:
            const { f } = data.a.e;
            const { i } = data.h;
            return { f, i };
        case 3:
            const { c, d } = data.a.b;
            return { c, d };
        default:
            return 'Wrong Number';
    }
}

console.log(findDepth(3)); // { g: 4, j: 6 }
console.log(findDepth(1)); // { f: 3, i: 5 }
console.log(findDepth(2)); // { c: 1, d: 2 }
