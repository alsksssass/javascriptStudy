/**String 객체의 메서드를 사용하여 주어진 문자열에서 모든 모음을 제거하고, 
 * 단어의 첫 글자만 대문자로 변환하는 함수를 작성하세요. */

function makeStr(str) {
	let result = str.replace(/[aeiou]/gi, '');
	result = result.toLowerCase();
	result = result.charAt(0).toUpperCase() + result.slice(1);
	return result;
}

const string = "Hello World! This is a sample string.";
console.log(makeStr("Hello World! This is a sample string.")); // 'Ppl'