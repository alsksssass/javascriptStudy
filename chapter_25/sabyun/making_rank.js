function solution(score) {
    var answer = score.map(value => value.reduce((a, b,i,{length}) => i !== length - 1 ? a + b : (a + b)/length, 0));
    const pre = [...answer];
    answer.sort((a,b) => b-a);
    return pre.map((element)=> answer.indexOf(element)+1);
}