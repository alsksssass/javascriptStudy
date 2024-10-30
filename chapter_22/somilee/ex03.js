//Q. 화살표 함수와 일반 함수의 this 바인딩 차이를 보여주는 예제를 작성하고,
//   이러한 차이가 발생하는 이유를 설명하세요.

var name = 'somilee';
const obj = {
    name: 'somilee',
    generalFunc() {
        console.log(this.name);
    },
    arrowFunc: () => {
        console.log(this.name);
    }
};

obj.generalFunc(); // 'somilee'출력
obj.arrowFunc(); // undefined 출력 (전역 `golbal`에 접근)