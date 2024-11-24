/*
Chapter 46

### 문제 2
async/await를 사용하여 여러 API를 순차적으로 호출하고 결과를 처리하는 함수를 작성하세요.

*/

// Your solution

async function getTodo(id) {
	const url = 'https://jsonplaceholder.typicode.com/';

	const response = await fetch(url + `todos/${id}`);
	const responseJson = await response.json();
	return responseJson;
}

async function getUser(id) {
	const url = 'https://jsonplaceholder.typicode.com/';

	const response = await fetch(url + `users/${id}`);
	const responseJson = await response.json();
	return responseJson;
}

async function test() {
	const todo = await getTodo(1);
	const user = await getUser(todo.userId);
	console.log(todo, "\n", user);
}

test();
