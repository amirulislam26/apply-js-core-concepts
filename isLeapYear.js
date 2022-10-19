function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
    return true;
    }
    else{
        return false;
    }
}

const isMyLeapYearLove = isLeapYear(1933);
console.log('my LeapYear:',isMyLeapYearLove);
const isHerLeapYearLove = isLeapYear(2020);
console.log('Her LeapYear:', isHerLeapYearLove);