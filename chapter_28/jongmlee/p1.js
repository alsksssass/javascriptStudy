//주어진 숫자를 특정 단위로 포맷팅하는 함수를 만드세요.
// 예를 들어, 1000 -> 1k, 1000000 -> 1M 등으로 변환하세요.

function convert (n) {
	if (!Number.isSafeInteger(n)) {
		console.log("invalid arguments");
		return;
	}
	const standard = ["K", "M", "B", "T"];
	let ret = "";
	if (n < 0) {
		ret += "-";
		n *= -1;
	}
	let cnt = 0;
	let tmp = "";
	while (n > 0) {
		tmp += (n % 10);
		console.log(tmp);
		n /= 10;
		cnt++;
		if (cnt % 3 === 0) {
			ret += tmp.split('').reverse().join('') + standard[(cnt / 3) - 1];
			tmp = "";
		}
	}
	if (cnt % 3 !== 0) {
		ret += tmp.split('').reverse().join('') + standard[(cnt / 3) - 1];
	}
	return ret;
}

//console.log(convert(123125135412));
convert(123413252);