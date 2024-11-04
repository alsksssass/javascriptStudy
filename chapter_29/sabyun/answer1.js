function calculater(...args){
	if(args.length < 2 || args.length > 4) return;
	console.log(args);
	function distance(a,b){
		[this.x1, this.y1] = a;
		[this.x2, this.y2] = b;	
		return Math.sqrt(((x2-x1) ** 2)+ ((y2-y1) ** 2));
	}
	function round(args){
		if(args.length == 2) return (distance(args[0],args[1]) *2) * Math.PI
		let result =0;
		for(let i = 0; i < args.length; i++)
			{
				if(i === args.length -1) result += distance(args[0],args[args.length -1]);
				else result += distance(args[i],args[i+1]);
			
		}
		return result;
	}
	function triangleArea(args){
		[this.x1, this.y1] = args[0];
		[this.x2, this.y2] = args[1];
		[this.x3, this.y3] = args[2];
		return Math.abs((x1 * (y2 - y3)) + (x2 * (y3-y1)) + (x3*(y1 - y2))) * 0.5;
	}
	function squereArea(args){
		[this.x1, this.y1] = args[0];
		[this.x2, this.y2] = args[1];
		[this.x3, this.y3] = args[2];
		[this.x4, this.y4] = args[3];
		return Math.abs((x1*y2) + (x2*y3) + (x3*y4) +(x4*y1) - ((y1*x2) + (y2*x3) + (y3*x4) + (y4*x1))) * 0.5;
	}
	function area(args){
		if(args.length === 3) return triangleArea(args);
		else if(args.length === 4) return squereArea(args);
		else if(args.length === 2) return (distance(args[0],args[1]) ** 2) * Math.PI;
	}
	return ` ${args.length == 3 ? '삼각형': args.length === 4 ? '사각형': '원'} 의둘레는 ${round(args)} 입니다. 넓이는 ${area(args)} 입니다.`
}

console.log(calculater([0,0],[4,0]));
console.log(calculater([0,0],[4,0],[0,3]));
console.log(calculater([1,1],[5,1],[5,4],[1,4]));