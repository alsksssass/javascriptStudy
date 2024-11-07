/*
Chapter 32

### 문제 3
문자열에서 모든 HTML 태그를 제거하고 순수 텍스트만 추출하는 함수를 작성하세요. 정규표현식과 String 메서드를 활용하세요.

*/

// Your solution


const parseHtml= (html)=> {

	
	const arr = html.split('\n');
	let text = "";

	const rexExp = /<(.+?)>(.+?)<\/\1>/;


	arr.forEach(line => {

		if (rexExp.test(line)) {
			line = line.replace(rexExp, "$2");
		}

		text += line + '\n';

	});


	return text;
}


const htmlText = `
<strong>bold text</strong>
<em>italic text</em>
<li>List item 1</li>
<li>List item 2</li>
`;

console.log(parseHtml(htmlText));
