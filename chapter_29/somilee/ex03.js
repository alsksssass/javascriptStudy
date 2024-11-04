//Q. 원주율(π)을 사용하여 원기둥의 부피와 표면적을 계산하는 함수를 작성하세요. 
//   결과값을 원하는 소수점 자리수로 반올림할 수 있도록 구현하세요.

function solution(r, h) {
    const volume = Math.pow(r, 2) * Math.PI * h;
    const area = Math.pow(r, 2) * Math.PI * 2 + 2 * Math.PI * r * h;
    console.log(`부피는 ${Math.round(volume * 100) / 100}, 표면적은 ${Math.round(area * 100) / 100}`);
}

solution(3, 4);