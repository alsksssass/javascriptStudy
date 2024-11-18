function solution(arr) {
    var stack = [];
    var cnt = 0;
    for(const n of arr) {
        stack.push(n);
        if(n == 1 && stack.length >= 4) {
            const tmp = stack.slice(stack.length - 4);
            if(tmp[0] == 1 && tmp[1] == 2 && tmp[2] == 3 && tmp[3] == 1) {
                stack.sloce(-4, 4); // stack = stack.slice(0, stack.length -4)는 시간초과
                cnt++;
            }
        }
    }
    return cnt;
}

const arr = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(arr));