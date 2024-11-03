/**
 * 다양한 진법의 숫자를 변환하는 계산기를 구현하세요.
 * 2진수, 8진수, 16진수 간의 상호 변환이 가능해야 합니다.
 */


const convertBase = (num, from, to)=>{
	temp = parseInt(num, from); // 10진수로 만듬
	return (temp).toString(to);
	
}

console.log(convertBase(10, 10, 2));
console.log(convertBase(10, 10, 8));
console.log(convertBase(10, 10, 16));

console.log(convertBase(1010, 2, 10));
console.log(convertBase(1010, 2, 8));
console.log(convertBase(1010, 2, 16));

console.log(convertBase(10, 8, 2));
console.log(convertBase(10, 8, 10));
console.log(convertBase(10, 8, 16));