const baby = ['aya','ye','woo','ma'];

function checker(string){
    let str = string;
    baby.forEach(element => str = str.replace(element,' '));
    return str.trim().length === 0;
}
function solution(babbling) {
    return babbling.filter((element) => checker(element)).length;
}