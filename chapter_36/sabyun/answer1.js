/*
Chapter 36

### 문제 1
복잡한 객체에서 필요한 데이터만 추출하여 새로운 객체를 만드세요.

*/

// Your solution
const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    isActive: true
};

function remaker(data){
	const {id,name} = data;
	return {id, name};
}

console.log(remaker(user));