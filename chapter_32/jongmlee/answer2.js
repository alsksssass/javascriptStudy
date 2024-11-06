/*
Chapter 32

### 문제 2
마크다운 텍스트를 HTML로 변환하는 간단한 파서를 구현하세요.
(#, *, -, > 등의 기본적인 마크다운 문법 지원)

*/

// Your solution

function parser(text) {
	return text
	  .replace(/^# (.+)/gm, '<h1>$1</h1>')
	  .replace(/^\* (.+)/gm, '<ul><li>$1</li></ul>')
	  .replace(/^> (.+)/gm, '<blockquote>$1</blockquote>')
	  .replace(/^- (.+)/gm, '<ul><li>$1</li></ul>');
  }
  
  // 예시 사용
  console.log(parser("# 제목\n* 목록 항목1\n * 목록 항목2\n- 서브 항목\n> 인용문"));