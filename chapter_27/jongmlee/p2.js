// 배열의 다양한 메서드(splice, slice, concat)를 사용하여
// 주어진 배열에서 특정 요소들을 추출하고 새로운 배열을 만드는 함수를 작성하세요.

var nums = [1, 2, 3, 4, 5, 6, 7, 8];

const spliceNums = nums.splice(0,4);
console.log(spliceNums);
console.log(nums);

var nums = [1, 2, 3, 4, 5, 6, 7, 8];

const sliceNums = nums.slice(3, 5);
console.log(sliceNums);
console.log(nums);

var nums = [1, 2, 3, 4, 5, 6, 7, 8];

const concatNums = nums.concat([1, 2, 3]);
console.log(concatNums);
console.log(nums);
