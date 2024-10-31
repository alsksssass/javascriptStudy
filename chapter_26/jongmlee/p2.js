// 매개변수 기본값, Rest 파라미터, 명명된 매개변수를 활용하여
// 다양한 옵션을 처리할 수 있는 함수를 작성하세요.

function player(name = "Player", height = 180, isLeftHandler, ...options) {
	return { name, height, isLeftHandler, ...options };
}

// 예시 호출
console.log(player("Jordan", 198, true, ["Guard", "Bulls"]));
console.log(player());
  