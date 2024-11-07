// Q. 마크다운 텍스트를 HTML로 변환하는 간단한 파서를 구현하세요. 
// (#, *, -, > 등의 기본적인 마크다운 문법 지원)

function markdownToHtml(markdown) {

markdown = markdown.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
markdown = markdown.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
markdown = markdown.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
//$:문자열 끝, g:여러번 탐색, m:다중행 모드, $1:캡쳐한 첫번쨰 그룹

markdown = markdown.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');
markdown = markdown.replace(/\*(.*?)\*/gm, '<em>$1</em>');

markdown = markdown.replace(/^[-*] (.*?)$/gm, '<ul><li>$1</li></ul>');

markdown = markdown.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>');

return markdown;
}

// 사용 예시
const markdownText = `
# 헤더 1
## 헤더 2
### 헤더 3

**굵은 글씨**
*기울임 글씨*

- 목록 항목 1
- 목록 항목 2

> 이것은 인용입니다.
`;

const html = markdownToHtml(markdownText);
console.log(html);
