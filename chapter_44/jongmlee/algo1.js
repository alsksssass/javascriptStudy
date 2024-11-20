function solution(k, tangerine) {
    var answer = 0;
    const map = new Map();
    for (x of tangerine) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    }
    const sortedMap = new Map(
        [...map.entries()].sort((a, b) => b[1] - a[1])
    );
    for (x of sortedMap) {
        k -= x[1];
        if (k > 0) {
            answer++;
        } else {
            answer++;
            break;
        }
    }
    console.log(answer);

    return answer;
}