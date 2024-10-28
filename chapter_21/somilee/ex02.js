function func (s) {
	const removedVowel = s.replace(/[aeiou]/gi, "");
	const ret = removedVowel.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
	return ret;
}

console.log(func("hello world"));