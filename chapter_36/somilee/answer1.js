/*
Chapter 36

### 문제 1
복잡한 객체에서 필요한 데이터만 추출하여 새로운 객체를 만드세요.

*/

const user = {
    // id: 1,
    name: 'somilee',
    age: 26,
    address: 'Ichon',
    number: '010-3115-7496',
    email: 'somin990202@naver.com'
};

const {id = 0, name, age} = user;
const user1 = {id, name, age};

console.log(user1);