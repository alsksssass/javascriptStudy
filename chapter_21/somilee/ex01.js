function cal(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = sum / arr.length;
    
    console.log(`max = ${max}, min = ${min}, sum = ${sum}, avg = ${avg}`);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
cal(arr);