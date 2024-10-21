//Circle 생성자 함수를 만들어 원의 반지름을 입력받고, 원의 넓이와 둘레를 계산하는 메서드를 추가하세요.
//그리고 이를 이용해 여러 개의 Circle 객체를 생성하고 정보를 출력해보세요.

function Circle(radius) {
	this.radius = radius;
	this.getCircumference = function () {
		return 2 * Math.PI * this.radius;
	}

	this.getArea = function () {
		return Math.PI * Math.pow(this.radius, 2);
	}
}

