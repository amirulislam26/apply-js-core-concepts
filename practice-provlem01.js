/// minit to secont~~20 minit == 1200 secont output........... 

function minitToSecont (minit){
    const mySecont = minit * 60;
    return mySecont;
}

const myTime = 20;
const timeIsLow = minitToSecont(myTime);
console.log(timeIsLow);