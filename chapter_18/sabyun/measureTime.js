
function measureTime(func){
	const start = Date.now();
	console.time('this');
	for(let i = 0; i < 100000000; i++)
		func();
	const end = Date.now();
	console.timeEnd('this');
	return end-start;
}

function add(a,b){
	return a + b;
}

console.log(measureTime(()=> add(1,2)));