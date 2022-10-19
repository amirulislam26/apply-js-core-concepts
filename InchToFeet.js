// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInchs = 144;
// const dadaFeet = dadaInchs / 12;
// console.log('dada feet', dadaFeet)

// const dadiInchs = 60;
// const dadiFeet = dadiInchs / 12;
// console.log('dadi feet', dadiFeet)


///...................................///
function inchToFeet(inchs){
    const feet = inchs / 12;
    return feet;
}

const dadaInchs= 144;
const dadaFeet = inchToFeet(dadaInchs);
console.log('dada',dadaFeet);

const dadiInchs = 160;
const dadiFeet = inchToFeet(dadaInchs)
console.log('dadi feet', dadiFeet);