/*
Chapter 37

### 문제 1
주어진 배열에서 중복을 제거하고 고유한 값만 남기는 함수를 구현하세요.

*/

function removeDup(arr) {
    return [...new Set(arr)];
}

const arr = [1,2,3,4,4,5,6,6,7,8,9];
console.log(removeDup(arr));