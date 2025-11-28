console.log('No problem');

// function machine(input) {
//     return input *2;
// }

// let result = machine(5);
// console.log (result);

var x = 10;

console.log(x, typeof x);


var pasisveikinimasSuBarsuku = 'Labas rytas, pone Barsukai!';

console.log('pasisveikinimasSuBarsuku:', pasisveikinimasSuBarsuku, typeof pasisveikinimasSuBarsuku);

console.log(x, pasisveikinimasSuBarsuku); // console.log() yra MATAVIMAS. Tarsi matuotum stalo ilgį. T.y. kodo veikimo principo tai niekaip neįtakoja.

x = 20;

console.log(pasisveikinimasSuBarsuku, pasisveikinimasSuBarsuku);

let L = 20; // Kintamojo deklaracija - t.y. vardo ir reikšmės suteikimas kintamajam.
const N = 20; 


// Trys dalykai, kuriuos būtina žinoti apie kintamuosius:

// 1. Kintamojo vardas
// 2. Kintamojo reikšmė (turinys)
// 3. Kintamojo tipas

let K1 = 25; // Tipas: Number, skaičius
let K2 = 'Barsukas' // Tipas: String
let K3 = '102' // Tipas: Stringas - nes reikšmė įrašyta KABUTĖSE,  ===> K A B U T Ė S E
let K4 = 54.78 // Tipas: Number 
let K5 = -78.0002 // Tipas: Number 

let K20 = K1 + 30;
console.log(K20);

let K30 = 100 + 20 * 5;
console.log(K30);

let K40 = K1 + K3 // sulipdymas
console.log(K40, typeof K40);

let K50 = K2 + ' ' + K2 + ' Bebras';
console.log(K50);

console.log (5 + 12 + 6 + ' Labas' + 20);

let bebrasVardas = 'Jonas';
let bebrasAmzius = 12;

let bebras = {
    vardas: 'Jonas', // tas žalias tai yra PROPERTY arba props - savybė
    amžius: 12,
}

bebras.uodega = 'Pusilgė';
bebras.amžius = 14;

console.log(bebras);
console.log(bebras.amžius);

let h1 = document.querySelector('h1');

console.log(h1, typeof h1);

let b = document.querySelector('body');

console.log(b, typeof b);

let color = 'blue';
let like = 'sky';
let dark = 'dark';

let bodyColor = like + color;


b.style.background = bodyColor;