function solution(num, total) {
    var ans = [];
    return Array.from({length: num}, (_, i) => Math.ceil(total/num) - Math.floor(num/2) + i);
}

console.log(solution(5, 15));