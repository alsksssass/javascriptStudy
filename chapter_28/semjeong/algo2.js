function solution(common) {
    let answer;
    let diff = common[1] - common[0];
    const last = common[common.length - 1];
    if (diff == common[2] - common[1]) {
        answer = last + diff;
    } else {
        diff = common[1] / common[0];
        answer = last * diff;
    }
    return answer;
}