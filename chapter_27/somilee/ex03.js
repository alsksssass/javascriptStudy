function changeToArray() {
    const numbers = Array.from(arguments);
    //const numbers = [...arguments];

    return {
        getSum: function() {
            return numbers.reduce((acc, n) => acc + n, 0);
        },
        getSquare: function() {
            return numbers.map(n => n * n);
        }
    };
}


console.log(changeToArray(1, 2, 3, 4, 5, 6, 7, 8, 9).getSum());
console.log(changeToArray(1, 2, 3).getSquare());