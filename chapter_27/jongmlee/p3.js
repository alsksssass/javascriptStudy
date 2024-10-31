// 유사 배열 객체를 실제 배열로 변환하고
// 배열의 메서드를 사용하여 데이터를 처리하는 예제를 작성하세요.

const arrLike = "HELLO WORLD";
const convertedArr = Array.from(arrLike);
console.log(convertedArr.map(x => x.toLowerCase()));
