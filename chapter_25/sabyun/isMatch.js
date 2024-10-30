class Line {
    constructor(arr) {
        this.x1 = arr[0][0];
        this.y1 = arr[0][1];
        this.x2 = arr[1][0];
        this.y2 = arr[1][1];
    }
    // 두 선분이 평행한지 체크하는 메서드 추가
    isParallel(otherLine) {
        const crossProduct = (this.x2 - this.x1) * (otherLine.y2 - otherLine.y1) - 
                             (this.y2 - this.y1) * (otherLine.x2 - otherLine.x1);
        return crossProduct === 0;
    }
};

function solution(dots) {
    const lineA = new Line(dots.slice(0, 2));
    const lineB = new Line(dots.slice(2));
    return +lineA.isParallel(lineB);
}



//5번자꾸 틀림
