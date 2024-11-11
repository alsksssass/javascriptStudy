/*
Chapter 34

### 문제 3
커스텀 이터러블 객체를 만들어 for...of 문으로 순회하세요.

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