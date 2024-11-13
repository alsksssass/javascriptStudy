/*
Chapter 39

### 문제 3
form 유효성 검사를 구현하세요.
JavaScript를 사용하여 새로운 HTML 요소를 생성하고 DOM에 추가하세요.
*/

// Your solution

// ul 생성
const ul = document.createElement("ul");

// li 생성 및 추가
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
}

// ul을 body에 추가
document.body.appendChild(ul);
