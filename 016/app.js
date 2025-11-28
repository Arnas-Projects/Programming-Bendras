


console.log('Viskas veikia, no problem');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 0. Kintamajam priskirti atsitiktinę reikšmę nuo 10 iki 99 ir tą reikšmę atspausdinti konsolėje

const randominis = rand(10, 99);
console.log(randominis);

// 1. Sugeneruoti atsitiktinę reikšmę nuo 10 iki 99. Jeigu ta reikšmė maženė už 50 kitamajam
// animal priskirti reikšmę 'Bebras'. Kitu atveju priskriri reikšmę 'Barsukas'. Atsitiktinę
// reikšmę ir animal kintamąjį atspausdinti konsolėje


const randomas2 = rand(10, 99);
let animal;  //šitas kintamasis bus keičiamas vėliau, funkcijoje, todėl turi būti priskirtas kaip let

if (randomas2 < 50) {
    animal = 'Bebras';
} else {
    animal = 'Barsukas';
}

console.log(randomas2, animal);


// 2. Parašyti funkciją, kuri spausdina atsitiktinį skaičių nuo 1 iki 5;
function smagu1() {
    console.log(rand(1, 5));
}

smagu1();


// 3. Parašyti funkciją, kuri grąžina atsitiktinį skaičių nuo 1 iki 5. Grąžintą skaičių reikia priskirti
// kintamąjam skaicius15. Kintamąjį skaicius15 padauginti iš 5 ir gautą rezultatą atspausdinti konsolėje

function vienasPenkiA() {
    const A = rand(1, 5);
    return A;
}

let skaicius15 = vienasPenkiA();
skacius15 = skaicius15 * 5;

console.log(skaicius15);


// 4. Parašyti funkciją kuri grąžina stringą 'Puiki diena'. Gautą stringą priskirti kintamąjam
// tą kintamąjį atspausdinti

function nesmagu1() {
    const num1 = 'Puiki diena';
    return num1;
}

nesmagu1();

//--------------------------------------------------------------------------------

console.log(nesmagu1(), typeof nesmagu1);

// 4. Dėstytojo sprendimas:
function nesmagu2() {
    return 'Puiki diena';
}

const kokiaDiena = nesmagu2();

console.log(kokiaDiena);


// 5.

// function nesmagu3() {
//     return rand('A', 'B')
// }


// let raide = nesmagu3();
// let myStr = parseStr(raide);

// console.log(myStr, typeof myStr);


console.clear();

//5. Destytojo sprendimas
function belekas() {
    const r = rand(0,1);
    if (r) {
        return 'A';
    }    
        return 'B';  
}

const raide = belekas();

console.log(raide);

console.clear();

//--------------------------------------------------------------------------------------------------------------

let kas;

if (24 > 15) {
    kas = 'TAIP';
} else {
    kas = 'NE';
}

console.log(kas);

const kas2 = 24 > 150 ? 'TAIP' : 'NE';   //Ternary - priskiriamoji sąlyga

console.log(kas2);

function belekasT() {
    return rand(0,1) ? 'A' : 'B';
}

const raideT = belekasT();

console.log(raideT);

console.clear();

const bebras = function(Bebras) {
    
}


// const fun10 = function(st1, st2) {
//     if (st1.length > st2.length) {
//         return st1; //nutraukiam funkcijos veikimą, PO TO, kai funkcija grąžina ką nors į konsolę, naršyklę ir t.t.
//     } return st2;
// }

const firstLetter = function(word) {
    return word[0];
}

console.log(firstLetter('Bebras'));
console.log(firstLetter('Zebras'));


// 7.
const lastLetter = function(nesmagu) {
    return nesmagu[nesmagu.length - 1];
}

console.log(lastLetter('Takeshi pili'));

console.clear();

//8. 



const aktyvus = function() {
    console.log('Labas');
}


const button1 = document.querySelector('button');

button1.addEventListener('click', aktyvus);