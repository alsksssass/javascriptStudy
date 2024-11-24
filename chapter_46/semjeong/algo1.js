// 연속된 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function getAnswer(s, e) {
    const ans = [];
    for (let i=s; i<e; i++) {
        ans.push(i - 50);
    }
    return ans;
}

function solution(num, total) {
    let arr = Array.from({length: 1051}, (_, i) => i - 50);
    arr = arr.reduce((p, v) => {
        p[p.length] = v + p[p.length - 1];
        return p;
    }, [0]);
    for (let i=0; i<arr.length; i++) {
        if (arr[i + num] - arr[i] == total) {
            return getAnswer(i, i+num);
        }
    }
    return [];
}
