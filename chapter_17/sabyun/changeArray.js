function solution(arr, k) {
    var answer = [];
    arr.forEach((item) => {
        if (k % 2 === 1) {
            answer.push(item * k);
        } else {
            answer.push(item + k);
        }
    });
    return answer;
}