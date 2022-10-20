function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const  factorial = getFactorial(8);
console.log('my Love Factorial:', factorial);