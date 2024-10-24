// `String` 객체의 메서드를 사용하여 주어진 문자열에서 모든 모음을 제거하고, 
// 단어의 첫 글자만 대문자로 변환하는 함수를 작성하세요.

function solve (s) {
	const removedVowel = s.replace(/[aeiouAEIOU]/g, "");
	const ret = removedVowel.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
	return ret;
}

console.log(solve("hello world"));