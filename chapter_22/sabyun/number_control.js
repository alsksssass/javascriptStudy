function solution(n, control) {
    var answer = n;
    control.split('').forEach((char)=>{
        if(char === 'w')
            answer++;
        else if(char ==='s')
            answer--;
        else if(char ==='d')
            answer += 10;
        else
            answer -= 10;
    })
    return answer;
}
function solution(n, control) {
    control.split('').forEach(char=> n += 
		char === 'w' ?
		1 : 
		char === 's' ?
		-1 :
		char === 'd' ?
		10 : -10)
    return n;
}