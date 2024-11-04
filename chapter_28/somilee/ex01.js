// Q. 주어진 숫자를 특정 단위로 포맷팅하는 함수를 만드세요. 
//    예를 들어, 1000 -> 1k, 1000000 -> 1M 등으로 변환하세요.

function formatNum(num) {
    if (num >= 1000000000)
        return (num / 1000000000).toFixed(1) + "B";
    else if (num >= 1000000)
        return (num / 1000000).toFixed(1) + "M";
    else if (num >= 1000)
        return (num / 1000).toFixed(1) + "K";
    else
        return num.toString();
}

console.log(formatNum(1000));       // "1k"
console.log(formatNum(2500000));    // "2.5M"
console.log(formatNum(1230000000)); // "1.2B"
console.log(formatNum(500));        // "500"