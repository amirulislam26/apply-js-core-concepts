function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i --;
    }
    return result;
}

const Love = factorial(7);
console.log(Love);