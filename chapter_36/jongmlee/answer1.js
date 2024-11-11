/*
Chapter 36

### 문제 1
복잡한 객체에서 필요한 데이터만 추출하여 새로운 객체를 만드세요.

*/

// Your solution

const cat = {
	name: "cherry",
	age: 3,
	breed: "Persian",
	favoriteToy: "fur ball",
	owner: { nick: "jongmlee" },
	health: { weight: 4 }
};

const { name, age, breed, owner: { nick } } = cat;

console.log({name, age, breed, nick});