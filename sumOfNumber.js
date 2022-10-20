// 1 + 2 + 3 + 4 + 5 + 6 + 7
function sumOfNumber(number) {
    let sum = 0;
    for(let i = 1; i <= number; i ++){
        sum = sum + 1;
        console.log(i, sum);
    }
    return sum;
}
sumOfNumber(11, 21, 31, 41, 51, 61, 71, 81, 91)