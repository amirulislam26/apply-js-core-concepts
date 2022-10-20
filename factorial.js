// 1! = 1*1       = 1*1!
// 2! = 2*1       = 2*1!
// 3! = 3*2*1     = 3*2!
// 4! = 4*3*2*1   = 4*3!
// 5! = 5*4*3*2*1 = 5*4!

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}


const result = factorial(9);
console.log(result)