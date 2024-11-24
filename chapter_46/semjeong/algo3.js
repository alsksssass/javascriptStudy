// 9로 나눈 나머지
// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
    var answer = 0;
    for (let i=0; i<number.length; i++) {
        answer = (answer + number[i]) % 9;
    }
    return answer;
}
