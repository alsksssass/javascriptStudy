function multiFunc(a = 1, b = 2,...rest){
	console.log('a',a,' b',b,'other',rest);
}

multiFunc();
multiFunc(2);
multiFunc(3,4);
multiFunc(3,4,5,6);
multiFunc([1,2,3,4,5]);