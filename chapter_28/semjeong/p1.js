function formatNum(num) {
	if (typeof num !== 'number') {
		console.log('not a number');
		return;
	}
	if (num > Number.MAX_SAFE_INTEGER) {
		console.log('too large number');
		return;
	}
	const postfix = ["", "K", "M", "B", "T", "Q"];
	let ret = "";
	let cnt = 0;

	while (num) {
		let unit = (num % 1000).toString();
		num = Math.floor(num / 1000);
		if (unit != "0") ret = unit + postfix[cnt] + ret;
		cnt++;
	}

	// for (let str = num.toString(); str != ""; str = str.substring(0, str.length - 3)) {
	// 	const trimZero = str.substring(str.length - 3).replace(/^0+/g, '');
	// 	if (trimZero != "")
	// 		ret = trimZero + postfix[cnt] + " " + ret;
	// 	cnt++;
	// }

	return ret;
}
console.log(formatNum(1200000000000000));
console.log(formatNum(9007199254740991));
console.log(formatNum(1234567890000000000000000));
