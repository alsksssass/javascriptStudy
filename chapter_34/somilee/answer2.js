/*
Chapter 34

### 문제 2
무한 피보나치 수열을 생성하는 이터레이터를 구현하세요.

*/

const fibonacci = {
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
    return {
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: false };
        }};
    }};
    
for (const num of fibonacci) {
    console.log(num);
}