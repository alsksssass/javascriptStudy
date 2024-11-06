function urlParsing(url) {
	const urlRegex = /(?:(\w+):\/\/)?([\w\d.]+)(?::(\d+))?([\/\w\d%]*)(?:\?([^#]*))?(?:#([\S]+))?/g;
	const match = urlRegex.exec(url);
	return {
		protocol: match[1],
		host: match[2],
		port: match[3],
		path: match[4],
		query: match[5],
		fragment: match[6]
	}
}

/*
https://github.com/alsksssass/javascriptStudy
https://github.com:123/qwer/?asdf=asdf&asf=qewr#section
*/

console.log(urlParsing('https://github.com/alsksssass/javascriptStudy'));
console.log(urlParsing('https://github.com:123/qwer/?asdf=asdf&asf=qewr#section'));
