/*
Chapter 35

### 문제 1
여러 개의 배열을 병합하고 중복을 제거하는 함수를 작성하세요.

*/

function mergeArray(arr1, arr2, arr3) {
    const arr = [...arr1, ...arr2, ...arr3];
    return [...new Set(arr)];
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [4, 5, 6];
console.log(mergeArray(arr1, arr2, arr3));