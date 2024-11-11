/*
Chapter 35

### 문제 2
객체를 깊은 복사하는 함수를 스프레드 문법을 사용하여 구현하세요.

*/

// Your solution
const obj = {
  name: "jimchoi",
  age: 26,
  address: {
    city: "wonju",
  },
};

let copy = { ...obj };
obj.address.city = "seoul";
console.log(copy);

// const deepClone = (obj)=> {
// 	return {...Object.keys(obj).reduce((acc,cur) => {
// 		acc[cur] = deepClone(obj[cur]);
// 		return acc;
// 	}, {})};
// }
// obj.address.city = ".";
// copy = deepClone(obj);
// console.log()