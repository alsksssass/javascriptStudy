/*
Math 객체를 사용하여 주어진 배열에서 최대값과 최소값을 찾고, 모든 요소의 합과 평균을 계산하는 함수를 작성하세요.
*/

function getArrayStats(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  //reduce() 메서드를 호출하면 배열을 상대로 각 요소인자로 넘어온 콜백 함수를 실행하여 누적된 하나의 결과값을 반환
  //0은 초기값
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / arr.length;

  return { max, min, sum, avg };
}

console.log(getArrayStats([1, 2, 3, 4, 5])); // { max: 5, min: 1, sum: 15, avg: 3 }