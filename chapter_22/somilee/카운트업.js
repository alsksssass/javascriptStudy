function solution(start_num, end_num) {
    //return [...Array(end_num - start_num + 1)].map(i => start_num + i);
    return Array.from({ length: end_num - start_num + 1 }, (_, i) => start_num + i);
}

console.log(solution(3, 6))