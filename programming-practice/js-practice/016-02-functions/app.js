

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// Task # 0 -----------------------------------------------------
console.log('Task #0');

const kintamasis = rand(10, 99);

console.log(kintamasis);


console.log(`\n`);
// Task # 2 -----------------------------------------------------
console.log('Task #1');


const random = rand(10, 99);

let animal;

if (random < 50) {
    animal = 'Bebras';
} else {
    animal = 'Barsukas';
}

console.log('Gyvūnas:', animal, random);


console.log(`\n`);
// Task # 3 -----------------------------------------------------
console.log('Task #2');


const funkcija1 = function() {
    console.log(rand(1, 5));
}

funkcija1();


console.log(`\n`);
// Task # 3.1 (kitoks sprendimas) -----------------------------------------------------
console.log('Task #3.1 - kitoks sprendimas');


const funkcija2 = _ => console.log('Randominis skačius:', rand(1, 5));

funkcija2();


console.log(`\n`);
// Task # 4 -----------------------------------------------------
console.log('Task #4');

const funkcija3 = function() {
    const sk1 = rand(1, 5);
    return sk1;
}

let skaicius15 = funkcija3() * 5;


console.log(skaicius15);


console.log(`\n`);
// Task # 5 -----------------------------------------------------
console.log('Task #5');

function funkcija4() {
    dienele = 'Laba diena'
    return dienele;
}

const diena = funkcija4();

console.log(diena);


console.log(`\n`);
// Task # 6 -----------------------------------------------------
console.log('Task #6');

const funkcija5 = function() {
    const belekoks = rand(0, 1);
    if (belekoks) {
        return 'A';
    }
    return 'B';
}

const raide = funkcija5();

console.log('Raidė:', raide);

// console.clear();

const funkcija6 = (belekas=rand(0, 1)) => belekas ? 'A' : 'B';

console.log(funkcija6());

console.log(`\n`);

let kas;

if (24 > 15) {
    kas = 'Taip';
} else {
    kas = 'Ne'
}

console.log(kas);

console.log(`\n`);

const terneris = _ => 24 > 150 ? 'Taip' : 'Ne'; // priskiriamoji sąlyga - ternary operator

console.log(terneris());

// const funkcija6 = function() {
//     const belekoks = rand(0, 1);
//     if (belekoks) {
//         return 'A';
//     }
//     return 'B';
// }

const terneris2 = function() {
    return rand(0, 1) ? 'A' : 'B'
}

const randomRaide = terneris2();

console.log(randomRaide);

console.log(`\n`);
// Task # 7 -----------------------------------------------------
console.log('Task #7');


const funkcija7 = function(medis) {
    return medis[0];
}

const tree = funkcija7('Klevas');

console.log(tree);


console.log(`\n`);
// Task # 8 -----------------------------------------------------
console.log('Task #8');


const funkcija8 = function(medis) {
    return medis[medis.length -1];
}

console.log(funkcija8('Bebras'));
console.log(funkcija8('Gitara'));
console.log(funkcija8('Voverė'));

console.log(`\n`);
// Task # 9 -----------------------------------------------------
console.log('Task #9');

const mygtukas = document.querySelector('button');

const funkcija9 = function() {
    return console.log('Labas');
}

mygtukas.addEventListener ('click', funkcija9);














