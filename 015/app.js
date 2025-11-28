


function fun1() {  //funkcijos deklaracija
    console.log('Block');
}


// const fun4 = function() {
//     console.log('Button Clicked');
// }


console.log('Are you having fun learning functions?');

console.log ('Top');

if (true) {
    console.log('If');
}


console.log('Bottom 0');

fun1();
console.log('Bottom 1');
fun1();
console.log('Bottom 2');
fun1();

function fun2() {  //funkcijos deklaracija ; Funkcijos aprašymo, deklaracijos vieta kode neturi reikšmės, galima nukelti į bet kur, į viršų į apačią ir t.t.
    console.log('%cFancy', 'color:skyblue;font-size:25px');
}

fun2();
fun2();


//Anoniminė funkcija
const fun3 = function() {
    console.log('%cFancy', 'color:crimson;font-size:25px');
}

fun3();
fun3();


const fun4 = function() {
    console.log('Button Clicked');
    const h2 = document.querySelector('h2');
    h2.innerText = 'Fun, Fun, Fun!';
}


const button1 = document.querySelector('#nr1');

button1.addEventListener('click', fun4); // Kai click ant button1, paleidžiame fun4 funkciją

const fun5 = function() {
    console.log('%cTrue', 'color:darkgreen;font-size:25px');
}

const fun6 = function() {
    console.log('%cFalse', 'color:crimson;font-size:25px');
}

if (52 > 6) {
    fun5();
} else {
    fun6();
}

const fun7 = function(pirmasParametras, antrasParametras) {
    console.log(pirmasParametras * antrasParametras);
}

let pirmasArgumentas = 2;
let antrasArgumentas = 5;

fun7(pirmasArgumentas, antrasArgumentas);

fun7(8, 10);

fun7(10, 20);

// pirmas = 4;
// antras = 7;

// fun7();

const num2 = document.querySelector('#nr2');
const num3 = document.querySelector('#nr3');

const fun8 = function(sk1, sk2) {
    const rez = sk1 * sk2;
    return rez;
}

num2.innerText = fun8(8, 4);

const rez1 = fun8(7, 2);
num3.innerText = rez1;

//Parašyti funkciją, kuri gauna du skaičius ir grąžiną didesnį skaičių. Gražintą didesnį skaičių atspausdiname konsolėje.

const num4 = document.querySelector('#nr4');
const num5 = document.querySelector('#nr5');

const fun9 = function(sk1, sk2) {
    if (sk1 > sk2) {
        return sk1; //nutraukiam funkcijos veikimą, PO TO, kai funkcija grąžina ką nors į konsolę, naršyklę ir t.t.
    } return sk2;
}

// const fancyFun = (sk1, sk2) => sk1 > sk2 ? sk1 : sk2;

console.log(fun9(11, 22));
console.log(fun9(11,2));

num5.innerText = fun9(11, 2);

const fancyFun = (sk1, sk2) => sk1 > sk2 ? sk1 : sk2;

console.log(fancyFun(11, 22));
console.log(fancyFun(11,2));

//Parašyti funkciją, kuri gauna du stringus, pvž Bebras ir Barsukas, ir grąžina ilgesnį. Grąžintą stringą atspausdiname konsolėje.


const fun10 = function(st1, st2) {
    if (st1.length > st2.length) {
        return st1; //nutraukiam funkcijos veikimą, PO TO, kai funkcija grąžina ką nors į konsolę, naršyklę ir t.t.
    } return st2;
}


console.log(fun10('Bebras', 'Barsukas'));

