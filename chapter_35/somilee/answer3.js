/*
Chapter 35

### 문제 3
함수에 가변 인자를 전달받아 모든 인자의 합을 구하는 함수를 작성하세요.

*/

function getSum(...num) {
    return num.reduce((acc, n) => acc + n, 0);
}

console.log(getSum(1, 2, 3, 4, 5,));