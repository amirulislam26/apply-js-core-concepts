// even.................
// console.log(12/2);
// console.log(22/2);
// console.log(32/2);
// console.log(42/2);
// console.log(52/2);
// Odd...............
// console.log(25/2);
// console.log(19/2);
// console.log(17/2);
// console.log(57/2);
// console.log(85/2);
// console.log(53/2);

// % vag ses/.......................

// console.log(12%2);
// console.log(22%2);
// console.log(32%2);
// console.log(42%2);
// console.log(52%2);

//....................................
// console.log(25%2);
// console.log(19%2);
// console.log(17%2);
// console.log(57%2);
// console.log(85%2);
// console.log(53%2);


//==============================================//
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
    return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);