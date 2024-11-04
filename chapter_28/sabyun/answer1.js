
/*
1K	10^3 = 1,000	천
1M	10^6 = 1,000,000	백만
1B	10^9 = 1,000,000,000	십억
1T	10^12 = 1,000,000,000,000	조
1Q	10^15 = 1,000,000,000,000,000	천조
*/

function translateNum(num){
	if(!Number.isSafeInteger(num)) return
	const temp = Number(num).toString();
	if(temp.length/16 >= 1) return temp.substring(0,temp.length - 15) + 'Q';
	if(temp.length/13 >= 1) return temp.substring(0,temp.length - 12) + 'T';
	if(temp.length/10 >= 1) return temp.substring(0,temp.length - 9) + 'B';
	if(temp.length/7 >= 1) return temp.substring(0,temp.length - 6) + 'M';
	if(temp.length/4 >= 1) return temp.substring(0,temp.length - 3).concat('K');
	return temp;
}
console.log(translateNum(10));
console.log(translateNum(1000));
console.log(translateNum(1234));
console.log(translateNum(1000000));
console.log(translateNum(1000000000));
console.log(translateNum(123000000000000));