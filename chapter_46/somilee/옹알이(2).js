function solution(babbling) {
    const p_words = ["aya", "ye", "woo", "ma"];
    let cnt = 0;
    for(const bab of babbling) {
        let before = "";
        let tmpBab = bab;
        for(const word of p_words) {
            while(tmpBab.length) {
                let flag = 1;
                p_words.forEach(word => { 
                    if(tmpBab.startsWith(word) && before !== word) {
                        tmpBab = tmpBab.slice(word.length);
                        flag = 0;
                        before = word;
                    }
                });
                if(flag)
                    break;
            }
        }
        if (!tmpBab.length) cnt += 1;
    }
    return cnt;
}

const babbling = ["aya", "yee", "u", "maa"];
console.log(solution(babbling));