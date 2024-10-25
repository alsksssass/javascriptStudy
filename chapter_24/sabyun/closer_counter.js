const counter = function ()
{
	let count = 0;

	return{
		increse(){return count++;},
		decrese(){return count--;},
		getValue(){return count}
	}
};

const cc = new counter();
cc.increse();
cc.increse();
console.log(cc.getValue());
cc.decrese();
console.log(cc.getValue());
console.log(cc.counter);
