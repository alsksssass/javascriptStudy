function solution(new_id) {
    
    let answer = '';
    answer = new_id.toLowerCase();
    answer = answer.replace(/[^0-9a-zA-Z\-._]/g, '');
    answer = answer.replace(/\.+/g,'.');
    answer = answer.replace(/^\.|\.$/,'')
    if (answer.length < 1)
        answer = 'a';
    if (answer.length > 15)
        answer = answer.slice(0, 15);
    answer = answer.replace(/\.$/,'');
    if (answer.length < 3) {
        while (answer.length < 3) {
            console.log(answer);
            answer += answer.charAt(answer.length - 1);
        }
    }
    return answer;
}