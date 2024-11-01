// 옹알이

const word = ["aya", "ye", "woo", "ma"];
let available = [];

function p(n, v, w) {
    if (n == 4) {
        if (w) available.push(w);
        return;
    }
    for (let i=0; i<4; i++) {
        if (v & 1<<i) continue;
        p(n + 1, v | 1<<i, w + word[i]);
        p(n + 1, v | 1<<i, w);
    }
}

function solution(babbling) {
    p(0, 0, "");
    available = available.filter((x, i) => available.indexOf(x) === i);
    return babbling.filter((x) => available.includes(x)).length;
}