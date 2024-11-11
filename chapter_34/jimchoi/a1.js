function solution(l, r) {

    var answer = [];
    for(let i=l; i<= r; i ++) {
        const str = i.toString();
        let check = true;
        for(let c of str)
        {
            if (c != '5' &&c != '0') {
              check = false;
             break;
                }   
        }
        if (check)
            answer.push(i); 
    }
    if (answer.length==0)
        answer = [-1];
    return answer;
}