function solution(babbling) {
    const p_words = ["aya", "ye", "woo", "ma"];
    let cnt = 0;
    for(const bab of babbling) {
        let tmpBab = bab;
        for(const word of p_words) {
            let flag = 1;
            p_words.forEach(word => { 
                if(tmpBab.startsWith(word)) {
                    tmpBab = tmpBab.slice(word.length);
                    flag = 0;
                }
            });
            if(flag) break;
        }
        if (!tmpBab.length) cnt += 1;
    }
    return cnt;
}
const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(solution(babbling));