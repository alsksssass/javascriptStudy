const fibonacci = {
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        const max = 10;
    return {
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
        }};
    }};
for (const num of fibonacci) { // 이터러블 객체(fibonacci)의 Symbol.iterator 메서드를 호출
    console.log(num); // 1 2 3 5 8 ,next() 메서드가 반복적으로 호출되어 value를 반환하고, done: true일 때 루프가 종료
}