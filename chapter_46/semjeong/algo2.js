// 옹알이 2
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function check(v) {
    for (let i=0; i<v.length; i++) {
        if (v[i] != '1' && v[i] != '2' && v[i] != '3'&& v[i] != '4') return false;
        if (i > 0 && v[i-1] == v[i]) return false;
    }
    return true;
}

function solution(babbling) {
    return babbling
            .map(v => v.replace(/aya/g, '1'))
            .map(v => v.replace(/ye/g, '2'))
            .map(v => v.replace(/woo/g, '3'))
            .map(v => v.replace(/ma/g, '4'))
            .filter(v => check(v)).length;
}
