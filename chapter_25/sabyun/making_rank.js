function solution(score) {
    var answer = score.map(value => value.reduce((a, b) => a + b, 0)/value.length);
    const pre = [...answer];
    answer.sort((a,b) => b-a);
    return pre.map((element)=> answer.indexOf(element)+1);
}