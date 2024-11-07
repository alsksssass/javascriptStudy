function solution(id) {
    let new_id = id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '');
    //소문자 치환, 다른문자 제거, 2이상 연속된 .을 하나로 치환, 처음이나 마지막. 제거
    new_id = new_id || "a"; // 빈문자열이라면 "a"대입
    if(new_id.length >= 16) // 앞15자리까지 자르고 끝에 .있으aus wprj
        new_id = new_id[14] === '.' ? new_id.substring(0, 14) : new_id.substring(0, 15);
    if(new_id.length < 3) // 3자리 이상 될때까지 마지막문자 반복
        while(new_id.length < 3)
            new_id += new_id[new_id.length - 1];
    return new_id;
}
const id =  "...!@BaT#*..y.abcdefghijklm";
console.log(solution(id)); //bat.y.abcdefghi