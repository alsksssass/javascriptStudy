const f1 = function () {
	console.log("f1");
}
const f2 = () => {
	console.log("f2");
}

const test1 = new f1; // 됨
// const test2 = new f2; //안됨

// 객체나 클래스 안에 있는 함수도 마찬가지

const object = {
	data:1,
	f1 : function(){
		console.log(this);
		console.log(arguments);
	},
	f2 : () => {
		console.log(this); // 전역객체
		console.log(arguments);// 원래 없는데 node.js환경에선 내부 모듈 출력

	}
}

object.f1(1,2,3);
object.f2(1,2,3);
