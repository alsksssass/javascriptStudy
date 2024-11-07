/*
Chapter 32

### 문제 3
문자열에서 모든 HTML 태그를 제거하고 순수 텍스트만 추출하는 함수를 작성하세요. 정규표현식과 String 메서드를 활용하세요.

*/

// Your solution
function translater(markdown){
	let html ="";
	const txt = markdown.split('\n');
  
	for(line of txt){
	  const txt_data = line.replace(/<[^>]*>/g, '').trim();  
	  html+=txt_data;
	}
	return html;
  
  }
  const markdown = `<!DOCTYPE html>
  <html lang="ko">
	  <head>
		  <meta charset="UTF-8">
		  <title>querySelectorAll() 함수</title>     
	  </head>
	  <body>
		  <ul>
			  <li>김밥</li>
			  <li>라면</li>
			  <li>떡볶이</li>
		  </ul>
		  <script src="main.js"></script>
	  </body>
  </html>`;
  
  const html = translater(markdown);
  console.log(html);