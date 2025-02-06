let playgroundBox = document.querySelector('.playground')
let redBox = document.getElementById('red-box')
let inputVal = document.getElementById('input-box')


let startBtn = document.querySelector('#start-btn');
let pauseBtn = document.querySelector('#pause-btn');
let resetBtn = document.querySelector('#reset-btn');

let entryOne = document.getElementById('entryOne');
let entryTwo = document.getElementById('entryTwo');
let entryThree = document.getElementById('entryThree');
let entryFour = document.getElementById('entryFour');
let entryFive = document.getElementById('entryFive');
let entrySix = document.getElementById('entrySix');
let entrySeven = document.getElementById('entrySeven');
let entryEight = document.getElementById('entryEight');
let entryNine = document.getElementById('entryNine');
let entryTen = document.getElementById('entryTen');
let counter = 1;
let time = 0;
let stopCount = true;

let reactionTime = "0.0";
let millSec = 0;
let sec = 0;
// inputVal.addEventListener('change', (newTime)=>{
//     console.log(newTime);
//     time = newTime;
// })

inputVal.addEventListener('input', (t)=> {
    time = t.data;
})

startBtn.addEventListener('click', ()=>{
    // console.log(inputVal)
    if(stopCount===true) {
        stopCount = false;
        timeCounter();
        boxTime();
        redBox.style.backgroundColor = 'red'
    }
});

redBox.addEventListener('click', ()=> {
    var i = Math.floor(Math.random()*40)+1;
    var j = Math.floor(Math.random()*40)+1;
    if(counter===1) {
        entryOne.innerText = reactionTime;
    } else if(counter===2) {
        entryTwo.innerText = reactionTime;
    } else if(counter===3) {
        entryThree.innerText = reactionTime;
    } else if(counter===4) {
        entryFour.innerText = reactionTime;
    } else if(counter===5) {
        entryFive.innerText = reactionTime;
    } else if(counter===6) {
        entrySix.innerText = reactionTime;
    } else if(counter===7) {
        entrySeven.innerText = reactionTime;
    } else if(counter===8) {
        entryEight.innerText = reactionTime;
    } else if(counter===9) {
        entryNine.innerText = reactionTime;
    } else if(counter===10) {
        entryTen.innerText = reactionTime;
    }
    counter+=1;
    redBox.style.marginTop = i+"vmin";
    redBox.style.marginLeft = j+"vmin";
    sec = 0;
    millSec = 0;
})

pauseBtn.addEventListener('click', ()=>{
    if(stopCount===false) {
        stopCount = true;
        redBox.style.backgroundColor = 'white'
    }
    time = 0;
    sec = 0;
    millSec = 0;
    reactionTime = "0.0";
})

resetBtn.addEventListener('click', ()=>{
    if(stopCount===false) {
        stopCount = true;
        redBox.style.backgroundColor = 'white'
    }
    time = 0;
    sec = 0;
    millSec = 0;
    reactionTime = "0.0";
    entryOne.innerText = "";
    entryTwo.innerText = "";
    entryThree.innerText = "";
    counter = 1;
})

function boxTime() {
    if(stopCount===false) {
        var i = Math.floor(Math.random()*40)+1;
        var j = Math.floor(Math.random()*40)+1;
        redBox.style.marginTop = i+"vmin";
        redBox.style.marginLeft = j+"vmin";

        setTimeout("boxTime()",time*1000);
    }
}

function timeCounter() {
    if(stopCount===false) {
        millSec = parseInt(millSec);
        sec = parseInt(sec);

        millSec += 1;

        if(millSec<10) {
            millSec = "0" + millSec;
        }
        if(millSec===100) {
            sec += 1;
            millSec = 0;
        }
        reactionTime = sec + "." + millSec;

        console.log(reactionTime);
        setTimeout("timeCounter()",time/100);
    }
}