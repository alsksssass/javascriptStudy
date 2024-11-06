function parseEmail(email) {
	const emailRegex = /([\w\d_.]+)@([\w\d.]+\.(\w+))/g;
	const match = emailRegex.exec(email);
	return {
		name: match[1],
		domain: match[2],
		tld: match[3]
	}
}

/*
semjeong@student.42seoul.kr
asdf@gmail.com
*/

console.log(parseEmail('semjeong@student.42seoul.kr'));
console.log(parseEmail('asdf@gmail.com'));
