/*
Chapter 34

### 문제 1
range 함수를 구현하세요. 시작값과 끝값을 받아 순회하세요.

*/

function range(start, end) {
    return {
        [Symbol.iterator]() {
            let cur = start;
            return {
                next() {
                    return {done: cur > end, value: cur++};
            }};
    }};
}

for(const num of range(1, 5)) {
    console.log(num);
}