function solution(number) {
    const sum = [...number].reduce((acc, n) => acc + parseInt(n), 0);
    return sum % 9;
}

console.log(solution("78720646226947352489")); // 2