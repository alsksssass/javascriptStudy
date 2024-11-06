function checkCreditCard(num) {
	const nnum = num.replaceAll(' ', '').replaceAll('-', '');
	const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
	const master = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
	const amex = /^3[47][0-9]{13}$/;
	// let info = /^([\d]{4})-([\d]{4})-([\d]{4})-([\d]{4})$/.exec(num);
	if (visa.test(nnum)) {
		console.log ('visa');
	} else if (master.test(nnum)) {
		console.log('master card');
	} else if (amex.test(nnum)) {
		console.log('amex');
	} else {
		console.log('other')
	}
}


// console.log(creditCard.exec('1234-5678-4321-8765'));
checkCreditCard('1234-5678-4321-8765')
checkCreditCard('4123 3323 2566 1234')
