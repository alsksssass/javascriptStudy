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

/*
함수를 생성하고 실행할때 독립적인 렉시컬 스코프가 생성되어 각각 다른 변수를 참조하여 개별적으로 카운터가 올라감
*/