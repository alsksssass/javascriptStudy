// 개인정보를 안전하게 보관하는 프라이빗 변수를 클로저를 사용하여 구현하세요. 이름과 나이는 특정 메서드로만 접근이 가능해야 합니다.
const privateInformationOfLebronJames = (function () {
	let name = 'Lebron';
	let age = '41';
	return {
		getName () {
			return name;
		},
		getAge () {
			return age;
		}
	}
}());

console.log(privateInformationOfLebronJames.getName());
console.log(privateInformationOfLebronJames.getAge());
