//Q. 주어진 좌표들로 이루어진 도형의 넓이와 둘레를 계산하는 함수를 구현하세요. 
//    Math 객체의 다양한 메서드를 활용하세요.

function solution(c) {
    let area = 0, len = 0;
    for(let i = 0; i < c.length; i++) {
        const [x1, y1] = c[i];
        const [x2, y2] = c[(i + 1) % c.length];
        area += (x1 * y2) - (x2 * y1);
        len += Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    console.log(`넓이는 ${Math.abs(area)/2}, 둘레길이는 ${len}`);
}
const c = [
    [0, 0],
    [4, 0],
    [4, 3],
    [0, 3]
];
solution(c);