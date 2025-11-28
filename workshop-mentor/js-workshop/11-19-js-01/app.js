function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
 

// 1. Ridenam kamuoliuką. Į atitinkamus tag'us parašom skaičių ir ar skaičius lyginis/nelyginis.
// Lyginį skaičių nudažom mėlynai, nelyginį - raudonai.

const skaicius = document.querySelector('.uzduotis1 > p > span');
// skaicius.innerText = 'laba diena';

const lygNelyg = document.querySelector('.uzduotis1 > p + p > span');
// lygNelyg.innerText = 'ziurim ar pataikem';

const ridenam = rand(1, 6);
skaicius.innerText = ridenam;

if (ridenam == 2 || ridenam == 4 || ridenam == 6) {
    lygNelyg.innerText = 'lyginis'; 
    skaicius.style.color = 'blue';
} else {
    lygNelyg.innerText = 'nelyginis';
    skaicius.style.color = 'crimson';
}

// 2. Petras ir Birutė ridena kamuoliuką. Į atitinkamus tagus įrašyti išridentus skaičius. 
// Didesnį skaičių nuspalvinti žaliai.
// Parašyti kas nugalėjo.

const petroRez = document.querySelector('.uzduotis2 > p > span');
const birutesRez = document.querySelector('.uzduotis2 > p + p >span');
const winner = document.querySelector('.uzduotis2 > p + p + p >span');

const petrasRidena = rand(1, 6);
petroRez.innerText = petrasRidena;

const biruteRidena = rand(1, 6);
birutesRez.innerText = biruteRidena;

if (petrasRidena > biruteRidena) {
    winner.innerText = 'Petras';
    petroRez.style.color ='green';
} else {
    if (biruteRidena > petrasRidena) {
    winner.innerText = 'Birute';
    birutesRez.innerText = 'green'
    } else {
        winner.innerText = 'lygiosios. Ridenam dar';
        winner.style.color = 'crimson';
    }
}