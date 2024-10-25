const pInfo = function(){
	let name = 'sabyun';
	let age = '35';
	return{
		getname : ()=> name,
		getage: ()=> age,
		setname : (newname)=>name =newname,
		setage : (newage)=>age = newage,
	}
}

const saver = new pInfo();

console.log(saver.getname());
console.log(saver.getage());
saver.setage(7);
saver.setname('gaeun');
console.log(saver.getname());
console.log(saver.getage());