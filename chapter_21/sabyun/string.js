const string = "Hello World! This is a sample string.";

function upper(string) {
	const temp = string.split(' ').map(word => {
		return word.charAt(0).toUpperCase() + word.substring(1);
	}).join(' ');
	return temp.split('').filter(word => {
		return !(word.toUpperCase() === 'A' || word.toUpperCase() === 'I' || word.toUpperCase() === 'E' || word.toUpperCase() === 'O' || word.toUpperCase() === 'U')
	}).join('');
}

function upper(string) {
	const temp = string.split('').filter(word => {
		return !(word.toUpperCase() === 'A' || word.toUpperCase() === 'I' || word.toUpperCase() === 'E' || word.toUpperCase() === 'O' || word.toUpperCase() === 'U')
	}).join('');
	return temp.split(' ').map(word => {
		return word.charAt(0).toUpperCase() + word.substring(1);
	}).join(' ');
}
console.log(upper(string));

