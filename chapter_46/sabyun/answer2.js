/*
Chapter 46

### 문제 2
async/await를 사용하여 여러 API를 순차적으로 호출하고 결과를 처리하는 함수를 작성하세요.

*/

// Your solution

async function callAll(){
	const a = await fetch('localhost:3000/todo').then(a=>a.json()).then(a=>JSON.stringify(a,null,2));
	const b = await fetch('localhost:3000/todo/123').then(a=>a.json()).then(a=>JSON.stringify(a,null,2));
	const c = await fetch('localhost:3000/todo/456').then(a=>a.json()).then(a=>JSON.stringify(a,null,2));
	const d = await fetch('localhost:3000/todo/789').then(a=>a.json()).then(a=>JSON.stringify(a,null,2));
	return [a,b,c,d];
}

