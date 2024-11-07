/*
문제 3
URL을 파싱하여 프로토콜, 호스트, 경로, 쿼리 파라미터, 해시 등을 분리하는 함수를 정규표현식을 사용하여 구현하세요.
*/
const url = require('url');

const urls = [
    'https://www.example.com/path?name=test#section1',
    'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
    'https://api.example.com/v1/users?page=1&limit=10',
    'ftp://192.168.1.1:21/downloads/file.txt'
];

class getUrl {
	constructor(str){
		this.address = new URL(str);
	}
	printDetail(){
		console.log('url = ',this.address);
		// ,'propcal= ',this.address.protocol,'host =',this.address.host,'params = ',this.address.searchParams);

	}
}

const newUrl = new getUrl(urls[0]);
newUrl.printDetail();