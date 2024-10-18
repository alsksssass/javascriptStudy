function solution(arr, n) {
    var answer = [];
    arr.forEach((item, idx)=>{
    if(arr.length % 2 === 0){
        if(idx % 2 === 1){
            answer.push(item + n);
        }
        else{
            answer.push(item);
        }
    }
    else{
        if(idx % 2 === 0){
            answer.push(item + n);
        }
        else{
            answer.push(item);
        }
    }
    })
    return answer;
}