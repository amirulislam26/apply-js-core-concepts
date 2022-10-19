// 1. variable
var myLove = 'Amirul';

//  math operation : +, -, *, /;
//  shorthand: +=, --, *=, /=;
//  ++, --;

// 2. array
var Love = ['robiul', 'tanjir', 'razzak', 'amirul'];
var bestFriend = Love[3];
Love[2] = 'amir khan';
// console.log(bestFriend);
// console.log(Love);


// 3. conditionals
// <, >, >=, <=, ==, ===, !=, !==;
if(Love.length < 2){
    console.log('tor kace to 500$ hobe bondu');
}
else{
    console.log('amr lagbe na 500$')
}

// 4. loop.....................
var num = 0;
while(num <= 6){
    // console.log(num);
    num++;
}

for(var i = 0; i <= 10; i++){
    console.log(i)
}

// 5.  function..................
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

// 6.......Object.......................

var jantus = {
    height: 60,
    myLove: "100%",
    amrIncome: '2000$',
    amrName: 'Amirul'
}
console.log(jantus);