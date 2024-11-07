function solution(files) {
    let answer = [];
    
    answer = files.sort((a, b) => {
        const headA = a.match(/^(\D+)(\d+)/)[1].toLowerCase();
        const headB = b.match(/^(\D+)(\d+)/)[1].toLowerCase();
        
        if (headA < headB) return -1;
        if (headA > headB) return 1;
        
        const num1 = parseInt(a.match(/\d+/));
        const num2 = parseInt(b.match(/\d+/));
        
        return num1 - num2;
        
    });

    return answer;
}