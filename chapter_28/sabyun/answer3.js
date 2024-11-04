function calculater (basemoney,rate,month =1){
	return ((basemoney * (rate/100))/12) * month;
}

function calculater2 (basemoney,rate,month =1){
	return ((basemoney * (1+(rate/100)/12) ** month));
}
console.log(calculater(10000000,3,2)); //단리
console.log(calculater2(10000000,3,2)); //복