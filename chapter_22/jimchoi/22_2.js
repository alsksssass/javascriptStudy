/**
 *apply. caU. bind 메서드는 Functlon.prototype의 메서드다. 
 즉 이들 메서드는 모든 힘수가 상속받아 사용 할 수 있다 

 Functlon.prototype.apply(thisArg[ , argsArray]) // 함수에게 전달할 인수 리스트의 유사 배열 객체
 
 Functlon.prototype.call (thisArg[, arg1[, arg2[ , ... ]]]) // 힘수에게 전달할 인수 리스트

 */


 function getThisBinding() 
 { 
	return this;
 }
 // this로 시용할 객체
 const thisArg = { a: 1 };
 // bind 에서드는 함수에 this로 시용할 객체를 전달한다.
 // bind 에서드는 힘수를 호출히지는 않는다.
 console.log(getThisBinding.call(thisArg)); 
 console.log(getThisBinding.apply(thisArg));
 console.log(getThisBinding.bind(thisArg)); // getThisBinding // bind 에서드는 함수를 호출히지는 않으므로 명시적으로 호출해야 한다. 
 console.log(getThisBinding.bind(thisArg)()); // {a3 1}