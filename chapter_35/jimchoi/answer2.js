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


const deepCopy =  (obj)=> {
  const result = {};
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      result[key] = deepCopy(obj[key]);
    }
  } else {
    return obj;
  }
  return result;
};

const deep = deepCopy(obj);
obj.address.city = "deepCopy";
console.log(deep);