const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const mounth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dayCaculater(to,from,arr = null){
	let count = 0;
	if(arr){
	}
	
	while(to.toDateString() !== from.toDateString()){
		const temp = to.toDateString();
		if(arr && arr.some(elemnet => elemnet.substring(0,3) === to.toDateString().substring(4,7) && Number(elemnet.substring(4))=== Number(to.toDateString().substring(7,10)))){
			to.setDate(to.getDate() + 1);
			continue;
		}
		if (!temp.includes('Sun') && !temp.includes('Sat')){
			count++;
		}
		to.setDate(to.getDate() + 1);
	}
	return count;
}

// Sun Mon Tue Wed Thu Fri Sat
const to = new Date();
const end = new Date();
end.setDate(to.getDate() +7);

console.log(dayCaculater(to,end,['Nov.6']));