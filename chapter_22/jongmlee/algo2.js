function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        const x = control[i];
        if (x === 'w') {
            n += 1;
        } else if (x === 's') {
            n -= 1;
        } else if (x === 'd') {
            n += 10;
        } else {
            n -= 10;
        }
    }
    return n;
}