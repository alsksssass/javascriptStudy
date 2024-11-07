// Q. 문자열에서 모든 HTML 태그를 제거하고 순수 텍스트만 추출하는 함수를 작성하세요. 
// 정규표현식과 String 메서드를 활용하세요.

function pureText(text) {
    return text.replace(/<(.*?)>/g, '');
}

const text = "<p>This is <b>bold</b> text with a <a href='#'>link</a>.</p>";
console.log(pureText(text));