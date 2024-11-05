const multi = /(\b5[1-5]\d{2}-\d{4}-\d{4}-\d{4}\b|\b\d{4}-\d{6}-\d{5}\b)/;

function solution (str){
	return multi.test(str);
}

console.log(solution('5158-9654-8932-1564'));
console.log(solution('5259-9654-8932-1564'));
console.log(solution('5358-9654-8932-1564'));
console.log(solution('5458-9654-8932-1564'));
console.log(solution('5558-9654-8932-1564')); ///일반 카드 번호
console.log(solution('5058-9654-8932-1564')); // 51-5 로 시작하지 않는번호
console.log(solution('5158965489321564')); //하이픈 없는거
console.log(solution('5100-515896-54893')); /// 15자리 아멕스
