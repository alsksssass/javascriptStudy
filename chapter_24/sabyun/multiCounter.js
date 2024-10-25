const counter = function ()
{
	let count = 0;

	return{
		increse(){return count++;},
		decrese(){return count--;},
		getValue(){return count}
	}
};

const c1 = new counter();

const c2 = new counter();
const c3 = new counter();
console.log('c1: ', c1.getValue());
console.log('c2: ', c2.getValue());
console.log('c3: ', c3.getValue());
c1.increse();
c2.increse();
c2.increse();
c3.decrese()
console.log('c1: ', c1.getValue());
console.log('c2: ', c2.getValue());
console.log('c3: ', c3.getValue());