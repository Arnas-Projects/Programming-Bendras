


const dayEL = document.querySelector('.number');
const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');

const NewYear = new Date('January 1, 2026 00:00:00');

// const d = new Date("October 13, 2014 11:13:00");

const countdown = _ => {

    const now = new Date();

    const timeLeft = NewYear - now;
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const d = Math.floor(timeLeft / day);
    const h = Math.floor((timeLeft % day) / hour);
    const m = parseInt((timeLeft % hour) / min);
    const s = parseInt((timeLeft % min) / sec);

    dayEL.innerText = d;
    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;

    setTimeout(countdown, 1000);

};


countdown();































// Task 1 ------------------------------------------------------------------------------------------------------
console.log('\nTask 1');










// Task 2 ------------------------------------------------------------------------------------------------------
console.log('\nTask 2');












// Task 3 ------------------------------------------------------------------------------------------------------
console.log('\nTask 3');









// Task 4 ------------------------------------------------------------------------------------------------------
console.log('\nTask 4');










// Task 5 ------------------------------------------------------------------------------------------------------
console.log('\nTask 5');










// Task 6 ------------------------------------------------------------------------------------------------------
console.log('\nTask 6');










// Task 7 ------------------------------------------------------------------------------------------------------
console.log('\nTask 7');










// Task 8 ------------------------------------------------------------------------------------------------------
console.log('\nTask 8');











