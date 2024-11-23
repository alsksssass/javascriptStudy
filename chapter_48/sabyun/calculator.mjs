export function operator(a,b,oper){
	if(oper ==='-')	return a-b;
	else if(oper ==='+')	return a+b;
	else if(oper ==='*')	return a*b;
	else if(oper ==='/')	return a/b;
}

export function calculator(a,b,oper){
	console.log(a,b,oper);
	console.log('in import',eval(String(a+b+oper)));	
	return operator(a,b,oper);	
}

