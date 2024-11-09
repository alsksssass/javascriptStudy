// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    const answer = [];
	// 다른 인덱스끼리 더하기
    numbers.forEach((v, i) => {
        for (let j=i + 1; j<numbers.length; j++) {
            answer.push(v + numbers[j]);
        }
    });
	// 오름차순 정렬 및 중복 제거
    return answer.sort((a, b) => a - b).filter((v, i) => i === answer.indexOf(v));
}