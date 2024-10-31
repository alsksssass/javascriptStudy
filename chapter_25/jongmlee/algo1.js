function solution(score) {
    var answer = [];
    const avgArr = [];
    score.forEach(x => avgArr.push((x[0] + x[1]) / 2));
    return avgArr.map((avg) => avgArr.filter((a) => a > avg).length + 1);
}
