/*
Chapter 32

### 문제 2
마크다운 텍스트를 HTML로 변환하는 간단한 파서를 구현하세요. (#, *, -, > 등의 기본적인 마크다운 문법 지원)

*/

// Your solution

function translater(markdown){
	let html ="";
	const txt = markdown.split('\n');
  
	for(line of txt){
	  if(line.startsWith('#')){
		const number = line.match(/#/g).length;
		const txt_data = line.replace(/#/g, '').trim();
		html+= `<h${number}>${txt_data}</h${number}>`;
	  }
	  else if(line.startsWith('*')){
		const txt_data = line.replace(/\*/g, '').trim();
		html+= `<li>${txt_data}</li>`;
	  }
	  else{
		html+= `<p>${line}</p>`;
	  }
	}
	return html;
  
  }
  const markdown = `# This is a heading
  ## This is a subheading
  * Item 1
  * Item 2`;
  
  const html = translater(markdown);
  console.log(html);