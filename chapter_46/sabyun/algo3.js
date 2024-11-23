function solution(number) {
    return [...number]
	.map(v => Number(v))
	.reduce((p,c)=>p+c,0)
	%9;
}

solution("78720646226947352489");