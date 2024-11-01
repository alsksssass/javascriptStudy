
function convert(num, ibase, obase) {
	const val = parseInt(typeof num == 'number' ? num.toString() : num, ibase);
	console.log(num, `(${ibase}) =>`, val.toString(obase), `(${obase})`);
}

convert(101, 2, 10);
convert(101, 10, 16);
convert('abc', 16, 10);
convert('72', 8, 10);
