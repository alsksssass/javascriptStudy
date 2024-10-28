// Q. 개인정보를 안전하게 보관하는 프라이빗 변수를 클로저를 사용하여 구현하세요. 
//    이름과 나이는 특정 메서드로만 접근이 가능해야 합니다.

function privateInfo(name, age, phone_num) {
    this.name = name;
    this.age = age;
    this.phone_num = phone_num;

    this.getName = function() { return name; };
    this.getAge = function() { return age; };
}

const person = privateInfo('somilee', 26, '010-3115-7496');
console.log(getName());
console.log(getAge());