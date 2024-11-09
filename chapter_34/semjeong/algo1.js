// 배열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function getNum(n) {
    // 주어진 이진수 n을 0, 5로 이루어진 숫자로 변환
    let num = 0, i = 0;
    while (n) {
        if (n & 1) num += 5 * (10 ** i);
        n >>= 1;
        i++;
    }
    return num;
}

function solution(l, r) {
    const answer = [];
    // 이진수로 만들어서 계산 (ex. 10 (2) => 50)
    for (let i=0; i < 1<<6; i++) {
        let num = getNum(i);
        if (num < l) continue;
        if (num > r) break;
        answer.push(num);
    }
    return answer.length === 0 ? [-1] : answer;
}

// 다른 사람 풀이

// const result = Array.from({length:r-l+1}, (_,i)=>i+l).filter(n=>!/[^05]/.test(n));
/*
function* gen50() {
    let i = 1;

    while(true) {
        yield Number(Number(i).toString(2)) * 5;
        i++;
    }
}
function solution(l, r) {
    const n = gen50();
    let a = 0;
    const arr = [];

    while(a < l) { a = n.next().value; }
    while(a <= r) { arr.push(a); a = n.next().value; }

    return arr.length ? arr : [-1];
}
*/
