/*
Chapter 36

### 문제 1
복잡한 객체에서 필요한 데이터만 추출하여 새로운 객체를 만드세요.

*/

// Your solution

const user = {
    id: 101,
    name: 'jimchoi',
    age: 26,
    address: {
        city: 'wonju',
        zip: '12345',
        country: 'South Korea'
    },
    contact: {
        email: 'jimchoi@example.com',
        phone: '010-1234-5678'
    },
    preferences: {
        theme: 'dark',
        notifications: true
    }
};

const {name, age, contact:{phone}} = user;

const jimchoi = {
	name,
	age,
	phone
};

console.log (jimchoi)
