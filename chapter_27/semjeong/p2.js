const arr = Array.from({ length: 10 }, (_, i) => i + 1);
console.log('arr', arr);

// splice(시작 위치, 삭제할 개수, ...추가할 요소)
// 시작위치에서 삭제할 개수만큼 삭제 후 추가할 요소를 추가한다.
arr.splice(arr.indexOf(5), 1, 12);
console.log('arr', arr);

// slice(시작위치, 종료위치) [시작위치, 종료위치)
const newarr = arr.slice(3, 5);
console.log('slice', newarr);

// concat(뒤에 붙일 요소들)
console.log('concat', arr.concat(newarr, 1, 2, 3, [10, 9 ,8]));
