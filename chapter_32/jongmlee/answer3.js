/*
Chapter 32

### 문제 3
문자열에서 모든 HTML 태그를 제거하고 순수 텍스트만 추출하는 함수를 작성하세요. 정규표현식과 String 메서드를 활용하세요.

*/

// Your solution

function getPureText(str) {
	return str.replace(/<[^>]+>/g, '');
}

const test = '<h1>Title</h1><p>This is a <strong>test</strong> paragraph.</p>';
console.log(getPureText(test)); 