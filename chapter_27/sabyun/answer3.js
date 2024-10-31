function exfunc(){
	return (Array.from(arguments));
}

console.log(Array.isArray(exfunc(1,2,3,4,5)));
console.log(exfunc(1,2,3,4));
console.log(exfunc(1,2,3,4).at(0));