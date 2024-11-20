
// const db = fetch('http://localhost:3000/todos')
// .then(response => response.json())
// .then(data => document.write(JSON.stringify(data)))
// .catch(err => document.write(err));

fetch('http://localhost:3000/todos',{
	method:'POST',
	headers: {
		"Content-Type" : "application/json"
	},
	body:JSON.stringify({
		content : "python",
		completed: false
	})
})
.then(res =>res.json())
.then(data =>console.log(JSON.stringify(data)))
.catch(err=> console.log(err));

fetch('http://localhost:3000/todos?id=4')
.then(response => response.json())
.then(data => console.log(JSON.stringify(data)))
.catch(err => console.log(err));
