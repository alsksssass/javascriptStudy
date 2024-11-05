function solution(new_id) {
    new_id = new_id.toLowerCase();
	// console.log('1단계',new_id);
	new_id = new_id.replace(/[^\w\.\-]/g,'');
	// console.log('2단계',new_id);
	new_id = new_id.replace(/\.{2,}/g, '.');
	// console.log('3단계',new_id);
	new_id = new_id.replace(/^\.|\.$/,'');
	// console.log('4단계',new_id);
	new_id = !new_id ? 'a':new_id;
	// console.log('6단계',new_id);
	new_id = new_id.length > 15 ? new_id.slice(0,15) : new_id;
	// console.log('7단계',new_id);
	new_id = new_id.replace(/\.$/,'');
	// console.log('8단계',new_id);
	new_id = new_id.length < 3 ? new_id.padEnd(3,new_id[new_id.length -1]) : new_id;
	// console.log('9단계',new_id);
	return new_id;
	// console.log(new_id);
	// for(let str of new_id){
	// 	str
	// }
}

//ai
/*
function solution(new_id) {
    // 1단계: 모든 문자를 소문자로 변환
    new_id = new_id.toLowerCase()

    // 2단계: 허용된 문자 (알파벳, 숫자, '-', '_', '.')만 남김
    .replace(/[^a-z0-9._-]/g, '')

    // 3단계: 연속된 마침표는 하나의 마침표로 변환
    .replace(/\.{2,}/g, '.')

    // 4단계: 마침표가 처음이나 끝에 위치하면 제거
    .replace(/^\.|\.$/g, '')

    // 5단계: 빈 문자열이면 'a'로 설정
    || 'a'

    // 6단계: 길이가 16자 이상이면 15자로 자르고, 끝의 마침표 제거
    .slice(0, 15).replace(/\.$/, '')

    // 7단계: 길이가 2자 이하라면 마지막 문자를 길이 3이 될 때까지 반복
    return new_id.padEnd(3, new_id[new_id.length - 1])
}
*/

solution('z-+.^.');