var name = 'gloval'
const temp ={
	name: 'temp',
	// 화살표함수 this = golbal , arguments, 생성자 안됨.
	arrow: ()=> console.log('name',this.name,'arguments',arguments),
	// 일반함수 this temp, arguments 생성자 가능.
	nomal: function (){
		console.log('name',this.name,'argument',arguments);
	}
}

temp.arrow();
temp.nomal();