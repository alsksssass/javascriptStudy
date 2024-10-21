function solution(arr, k) {
    var answer = [];
    arr.forEach((item) => {
        if (k % 2 === 1) {
            answer += (item * k);
        } else {
            answer += (item + k);
        }
    });
    return answer;
}