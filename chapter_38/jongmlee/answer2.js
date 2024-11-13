/*
Chapter 38

### 문제 2
레이아웃 스래싱을 발생시키는 코드를 작성하고, 최적화하세요.

*/

// Your solution

function resizeAllParagraphs() {
	const box = document.getElementById('box');
	const paragraphs = document.querySelectorAll('.paragraph');
  
	for (let i = 0; i < paragraphs.length; i += 1) {
	  paragraphs[i].style.width = box.offsetWidth + 'px';
	  // 반복문 안에서 box.offsetWidth를 읽어오면 for문이 돌때마다 레이아웃 발생
	  // 이와 같은 반복적인 리플로우로 인해 DOM에 반영하는 CPU 이용률이 높아짐
	  // 이를 레이아웃 스레싱이라고 함
	}
}

function optimizedResizeAllParagraphs() {
	const box = document.getElementById('box');
	const paragraphs = document.querySelectorAll('.paragraph');
	const width = box.offsetWidth;

	for (let i = 0; i < paragraphs.length; i += 1) {
		paragraphs[i].style.width = width + 'px';
		// 너비를 반복문 밖에서 읽어오면 레이아웃 스레싱을 막을 수 있음
	}
}