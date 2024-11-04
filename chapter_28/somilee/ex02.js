// Q. 다양한 진법의 숫자를 변환하는 계산기를 구현하세요. 
//    2진수, 8진수, 16진수 간의 상호 변환이 가능해야 합니다.

function convertBase(num, from, to) {
    const decimalNum = parseInt(num, from);
    return decimalNum.toString(to).toUpperCase();
}

console.log(convertBase("1010", 2, 8));    // 2진수 1010을 8진수로 변환 -> "12"
console.log(convertBase("A", 16, 2));      // 16진수 A를 2진수로 변환 -> "1010"
console.log(convertBase("12", 8, 16));     // 8진수 12를 16진수로 변환 -> "A"
console.log(convertBase("255", 10, 2));    // 10진수 255를 2진수로 변환 -> "11111111"
console.log(convertBase("FF", 16, 10));    // 16진수 FF를 10진수로 변환 -> "255"