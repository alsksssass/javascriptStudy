/*
Chapter 32

### 문제 2
마크다운 텍스트를 HTML로 변환하는 간단한 파서를 구현하세요. (#, *, -, > 등의 기본적인 마크다운 문법 지원)

*/

// Your solution

const parseMarkdown= (markdown)=> {

	
	const arr = markdown.split('\n');
	let html = "";

	const h1 = /\#(.+?)\#/g;
	const strong = /\*\*(.+?)\*\*/g;
	const em= /\*(.+?)\*/g;
	const li = /^\*\s*(.+)/g;

	arr.forEach(line => {

		if (h1.test(line)) {
			line = line.replace(h1, "<h1>$1</h1>");
		}

		if (strong.test(line)) {
			line = line.replace(strong, "<strong>$1</strong>");
		}
		if (em.test(line)) {
			line = line.replace(em, "<em>$1</<em>");
		}
		if (li.test(line)) {
            line = line.replace(li, "<li>$1</li>");
        } 
		html += line + '\n';

	});


	return html;
}

const markdownText = `
#header#
**bold text**
*italic text*
* List item 1
* List item 2
`;
console.log(parseMarkdown(markdownText));
