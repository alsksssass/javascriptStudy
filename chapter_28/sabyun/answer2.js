function translateNum(num,toNum){
	return Number(num).toString(toNum);
}

console.log(translateNum(8,2));
console.log(translateNum(32,16));
console.log(translateNum(255,16));