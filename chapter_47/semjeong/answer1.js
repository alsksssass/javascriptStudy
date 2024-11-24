/*
Chapter 47

### 문제 1
커스텀 에러 클래스를 만들고, 적절한 에러 처리 예제를 구현하세요.

*/

// Your solution
class ValidationError extends Error {
	constructor(msg) {
		super(msg);
		this.name = "ValidationError";
	}
}

function readUser(json) {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new ValidationError("No field: name");
	}
	if (!user.age) {
		throw new ValidationError("No field: age");
	}
	return user;
}

try {
	// let user = readUser('{"age": 25}');
	// let user = readUser('{"name": "asdf"}');
	let user = readUser('{"name": "asdf", "age": 25}');
	console.log(user);
} catch (err) {
	console.log(err.message);
}
