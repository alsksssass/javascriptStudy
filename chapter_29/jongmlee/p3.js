// 원주율(π)을 사용하여 원기둥의 부피와 표면적을 계산하는 함수를 작성하세요. 
// 결과값을 원하는 소수점 자리수로 반올림할 수 있도록 구현하세요.

function getVolume(radius, height, decimalPlaces) {
    const volume = Math.PI * radius ** 2 * height;
    return Number(volume.toFixed(decimalPlaces));
}

function getSurfaceArea(radius, height, decimalPlaces) {
    const surfaceArea = 2 * Math.PI * radius * (radius + height);
    return Number(surfaceArea.toFixed(decimalPlaces));
}

const radius = 5;
const height = 10;
const decimalPlaces = 2;

console.log("Volume:", getVolume(radius, height, decimalPlaces));        // 부피
console.log("Surface Area:", getSurfaceArea(radius, height, decimalPlaces)); // 표면적