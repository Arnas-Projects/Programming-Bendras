



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// const clickButtonNr1 = function () {
//     console.log('Button No 1');
// }

const buttonNr1 = document.querySelector('#nr1');

// inline funkcija
buttonNr1.addEventListener('click', function () {
    console.log('Button No 1');
});



// const clickButtonNr2 = function () {
//     console.log('Button No 2');
// }

// arrow funkcija
const clickButtonNr2 = _ => {
    console.log('Button No 2');
}

//skiriasi žodeliu this

const buttonNr2 = document.querySelector('#nr2');

//inline arrow
// buttonNr2.addEventListener('click', _ => {
//     console.log('Button No 2');
// });

buttonNr2.addEventListener ('click', _ => console.log('Button No 2'));


const inlineFunction = function(sk1, sk2) {
    return sk1 + sk2;
}

console.log(inlineFunction(5, 3));

const arrowFunction = (a, b) => {
    return a + b;
}

console.log(arrowFunction(10, 5));

//jeigu funkcijos bloke yra tik viena eilutė, galime supaprastinti

const arrowFunction2 = (a, b) => a + b;


console.log(arrowFunction2(100, 200));

const add1 = function (a) {
    return a + 5;
}

console.log(add1(10));

const add2 = (a) => {
    return a + 5;
}

const add3 = a => a + 5;

console.log(add3(100));

const bebras1 = () => {
    return 'BEBRAS'
}

const bebras2 = () => 'BEBRAS';

const bebras3 = nenaudoju => 'BEBRAS';

const bebras4 = _ => 'BEBRAS'

console.log(bebras1());
console.log(bebras2());
console.log(bebras3());
console.log(bebras4());

console.clear();

// CIKLAI - CYCLE

for(let i = 0; i != 10; i++) {
    console.log('Bla bla', i);
}

// Ciklų panaudojimas 1. Radimas kažko 2. Agregacija

const word = 'rabarbaras';

//1. Radimas. Kelinta raidė yra 'r' ir ar ji išvis yra žodyje

let found = '"r" raidė nerasta';

for(let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found = `"r" rasta ${i+=1} vietoje`;
    }
} // šitas blokas kartojasi, kadangi tai yra ciklas

console.log(found); // nėra ciklo bloke ir nesikartoja

// 1. Radimo ciklo pabaiga.


// 2. Agregacija

let count = 0;

for (i = 0; i < 10; i++) {
    if (word[i] =='r') {
        count++; // radome vieną, tai didiname vienetu
    }
} // šitas blokas kartojasi, kadangi tai yra ciklas, skaičiuoja (agreguoja), kiek žodyje yra raidžių

console.log(`Žodyje "${word}" yra ${count} "r" raidės`); // šito nėra ciklo bloke, taigi šitas blokas nesikartoja



let found1 = '';

for(let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found1 += `"r" rasta ${i+=1} vietoje \n`; // \n spec simbolis "nauja eilutė"
    }
}

console.log(found1);

/*
CIKLŲ TIPAI

for
while
do while
for in
for of
switch

CIKLO VALDYMAS
break
continue
*/

const randomGyvunasFunction = function() {
    const gyvunas = rand(1, 3);
    if (gyvunas == 1) {
        return 'Bebras';
    } else if (gyvunas == 2) {
        return 'Barsukas'
    }
    return 'Briedis'
};

const randomGyvunas = randomGyvunasFunction();

console.log(randomGyvunas);






















































