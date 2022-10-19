function milesToKilometor(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const ayPothJodiNa = 1212;
const myKilomiterSp = milesToKilometor(ayPothJodiNa);
console.log(myKilomiterSp);