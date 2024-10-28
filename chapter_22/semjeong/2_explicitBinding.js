const that = {
	name: "that"
}

function printName(hf) {
	console.log(`using ${hf}: ${this.name}`);
}

/*
 call: 첫번째 인자로 this binding을, 두번째 인자부터 원래 함수의 인자를 ,로 나눠서 입력
 해당 함수 실행
*/
printName.call(that, "call");

/*
 apply: 첫번째 인자로 this binding을, 두번째 인자를 원래 함수의 인자를 배열로 묶어 입력
 해당 함수 실행
*/
printName.apply(that, ["apply"]);
// call과 apply는 인자를 전달하는 방식만 다르고 동일하게 동작

/*
 bind: 인자로 this binding을 한, 원본 함수와 동일한 body를 갖는 함수를 반환
 메서드와 메서드 내부의 중첩함수 또는 콜백함수의 this가 불일치하는 문제에 유용
*/
printName.bind(that)("bind");