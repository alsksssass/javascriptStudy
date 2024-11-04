function solution(score) {
    const answer = score.map(([eng, math]) => (eng + math) / 2);
    
    return answer.map(current => {
        return answer.filter(compare => compare > current).length + 1;
    });
}