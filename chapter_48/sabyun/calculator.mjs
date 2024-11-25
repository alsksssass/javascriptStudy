function operator(a,b,oper){
	if(oper ==='-')	return a-b;
	else if(oper ==='+')	return a+b;
	else if(oper ==='*')	return a*b;
	else if(oper ==='/')	return a/b;
}

export function checker(a,b,oper){
	return operator(a,b,oper);	
}

