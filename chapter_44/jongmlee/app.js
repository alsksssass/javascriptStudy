const API_URL = "http://127.0.0.1:3000/posts";

// 게시글 전부 불러오기
function getPosts() {
	fetch(API_URL)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			const postList = document.getElementById("post-list");
			postList.innerHTML = "";
			result.forEach((post) => addPostToDOM(post));
		})
		.catch((error) => {
			console.error(error);
		});
}

// 게시글 서버에 추가
const addPostToServer = (post) => {
	fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "manual",
		body: JSON.stringify(post)
	})
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		addPostToDOM(result);
		getPosts();
	})
	.catch((error) => {
		console.error("Error:", error);
	})
}

// 게시글 서버에서 삭제
const deletePostFromServer = (postId) => {
	fetch(API_URL + "/" + postId, {
		method: "DELETE",
	})
	.then((result) => {
		getPosts();
	})
	.catch((error) => {
		console.error(error);
	})
}

// 게시글 수정

// 게시글 DOM에 추가
function addPostToDOM(post) {
    const postList = document.getElementById("post-list");
    //postList.innerHTML = "";
	const li = document.createElement("li");
	li.innerHTML = `
	<h3>${post.title}</h3>
	<p>${post.content}</p>
	`;
	li.setAttribute("data-id", post.id);
	const button = document.createElement("button");
	button.type = "button";
	button.innerText = '삭제';
	button.addEventListener('click', () => deletePostFromServer(post.id));
	li.appendChild(button);
	postList.appendChild(li);
}

document.getElementById("submit-post").addEventListener("click", (event) => {
	event.preventDefault();
	const title = document.getElementById("post-title");
	const content = document.getElementById("post-content");

	const newTitle = title.value.trim();
	const newContent = content.value.trim();

	if (!newTitle || !newContent) {
		alert("제목과 내용을 모두 입력해주세요.");
		return;
	}

	addPostToServer({"title": newTitle, "content": newContent});

	title.value = "";
	content.value = "";
});

getPosts();