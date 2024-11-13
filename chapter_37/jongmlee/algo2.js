function solution(N, stages) {
    class P {
        constructor (a, b, idx) {
            this.v = a / b;
            this.idx = idx;
        }
    }
    var answer = [];
    const all = Array(N + 1).fill(0);
    const fail = Array(N + 1).fill(0);
    stages.forEach((v, idx) => {
        for (let i = 1; i <= v; i++) {
            all[i]++;
        }
        if (v <= N) fail[v]++;
    })
    for (let i = 1; i <= N; i++) {
        answer.push(new P(fail[i], all[i], i));
    }
    return answer.sort((x, y) => y.v - x.v).map(x => x.idx);
}
