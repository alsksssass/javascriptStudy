/*
Chapter 46

### 문제 3
제너레이터를 사용하여 비동기 작업을 동기적으로 처리하는 예제를 구현하세요.

*/

// Your solution
const asdf = generatorFunc => {
	const generator = generatorFunc();

	const onResolved = arg => {
		const result = generator.next(arg);

		return result.done ? result.value : result.value.then(res => onResolved(res));
	};
	return onResolved;
}

(asdf(function* fetchTodo() {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	const response = yield fetch(url);
	const todo = yield response.json();
	console.log(todo);
})());
