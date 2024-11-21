const link = "http://localhost:3000/";
const div = document.getElementById("container");

async function getPosts() {
	const response = await fetch(link + "posts");
	const jsonData = await response.json();
	console.log("data", jsonData);
	return jsonData;
}

async function showDetail(id) {
	const response = await fetch(link + "posts/" + id);
	const jsonData = await response.json();
	div.innerHTML = `<div>${jsonData.title}</div>`;
	div.innerHTML += `<div>${jsonData.content}</div>`;
	div.innerHTML += `<button onclick='reset()'>뒤로가기</button>`;
}

function writePage() {
	console.log('write page');
	div.innerHTML = `
	<form>
		제목: <input type='text' id='title'><br>
		내용: <input type='textarea' id='content'><br>
		<input type='submit'>
	</form>
	`;
}

function reset() {
	div.innerHTML = '';
	getPosts().then((data) => {
		data.forEach(v => {
			div.innerHTML += `<div id=${v.id} onclick='showDetail(${v.id})'>[${v.title}]</div>`;
		});
	});
	div.innerHTML += `<button onclick='writePage()'>글쓰기</button>`;
}

reset();