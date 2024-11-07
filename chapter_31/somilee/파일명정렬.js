function solution(files) {
    files.sort((a, b) => {
        const a_head = a.match(/[^0-9]+/g)[0].toUpperCase();
        const b_head = b.match(/[^0-9]+/g)[0].toUpperCase();
        const a_num = a.match(/\d+/g)[0];
        const b_num = b.match(/\d+/g)[0];
        console.log(a_head, a_num);
        
        if(a_head !== b_head)
            return a_head.localeCompare(b_head);
        if(a_num !== b_num)
            return a_num - b_num;
        return 1; // return 0;
    })
    return files;
}

const files = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"];
console.log(solution(files));
