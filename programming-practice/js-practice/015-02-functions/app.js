

console.log('Top');

function fun1() {  // funkcijos deklaracija;
    console.log('Block');
}

console.log('Bottom');

fun1();

// FUNKCIJOS SAVYBĖS
// 1. Funkcija ir jos blokas yra NEVYKDOMI, ten kur jie yra užrašyti.
// 2. Kad funkcija būtų vykdoma, ją reikią paleisti, užrašant funkcijos vardą ir skliaustus.

console.log('Bottom0');


fun1();
console.log('Bottom1');
fun1();
console.log('Bottom2');
fun1();

function fun2() {
    console.log('%cFancy', 'color:skyblue;font-size:25px');
}

fun2();
fun2();


// Anoniminė funkcija
const fun3 = function () {
    console.log('%cFancy', 'color:crimson;font-size:25px');
}

fun3();
fun3();

const clickButton = function () {
    console.log('klikinu mygtuką 1');
    const h2 = document.querySelector('h2');
    h2.innerText = 'Jūs paspaudėte mygtuką - BOOM!';
}

const mygtukas1 = document.querySelector('#nr1');

mygtukas1.addEventListener('click', clickButton); // kai paspaudžiame ant mygtukas1, paleidžiam clickButton funkciją


const funkcija1 = function () {
    console.log('%cTRUE', 'color:green;font-size:25px');
}

const funkcija2 = function () {
    console.log('%cFALSE', 'color:crimson;font-size:25px');
}

if (7 > 6) {
    funkcija1();
} else {
    funkcija2();
}
// Čia yra iš principo neteisingas variantai, taip dauginti skaičius su funkcija
const funkcija3 = function () {
    // console.log(pirmas * antras);
}



const funkcija4 = function (pirmasParametras, antrasParametras) {
    console.log(pirmasParametras * antrasParametras);
}

let pirmasArgumentas = 2;
let antrasArgumentas = 5;

funkcija4(pirmasArgumentas, antrasArgumentas);

funkcija4(8, 10);

const nr2 = document.querySelector('#nr2');
const nr3 = document.querySelector('#nr3');

const funkcija5 = function (sk1, sk2) {
    const rez = sk1 * sk2;
    return rez;
}

nr2.innerText = funkcija5(8, 4);

const rez1 = funkcija5(7, 2);
nr3.innerText = rez1;

console.clear();

const hash4 = document.querySelector('#nr4');

const funkcija6 = function (skaicius1, skaicius2) {
    if (skaicius1 > skaicius2) {
        return skaicius1; // nutraukiam funkcijos veikimą iškart po return.
    }
    return skaicius2;
}

const naujas = (sk1, sk2) => sk1 > sk2 ? sk1 : sk2; // arrow funkcija + ternary

console.log(naujas(19, 101));

console.log(naujas(19, 2));

hash4.innerText = naujas(2, 5);

console.log(`\n`);
console.log(`\n`);


// Task -----------------------------------------

const naujas2 = function(animal1, animal2) {
    if (animal1.length > animal2.length) {
        return animal1;
    }
    return animal2;
}

let animal1 = 'Taurus';
let animal2 = 'Beaver';

console.log(naujas2(animal1, animal2));

console.clear();

const nr5 = document.querySelector('#nr5');

const naujas3 = (gyvunas1, gyvunas2) => gyvunas1.length > gyvunas2.length ? gyvunas1 : gyvunas2;

let zveriukas1 = 'Katė';
let zveriukas2 = 'Bebras';

console.log(naujas3('Šinšila', 'Varlė'));

nr5.innerText = naujas3('Meška', 'Katė')


const naujas4 = (pirmas1, antras2) => pirmas1 < antras2 ? pirmas1 : antras2;


console.log(naujas4(6, 10));


const naujas5 = function(medis1, medis2) {
    if (medis1.length > medis2.length) {
        return medis1;
    }
    return medis2;
}

console.log(naujas5('Beržas', 'Kaštonas'));




















