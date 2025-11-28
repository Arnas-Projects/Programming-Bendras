



// const clickMeNo1 = function() {
//     console.log('Button No1');
// }

const buttonNo1 = document.querySelector('#nr1');


//inline funkcija
buttonNo1.addEventListener('click', function() {
    console.log('Button No1');
});

//----------------------------------------------------------------------------------------------------


// const clickMeNo2 = function() {
//     console.log('Button No2');
// }
// const buttonNo2 = document.querySelector('#nr2');

// buttonNo2.addEventListener('click', clickMeNo2);


// Arrow funkcija
const clickMeNo2 = () => {
    console.log('Button No2');
}


// skiriasi žodeliu this < --- sunkiai suvokiamas dalykas

const buttonNo2 = document.querySelector('#nr2');

// buttonNo2.addEventListener('click', clickMeNo2);


//inline arrow
// buttonNo2.addEventListener('click', () => {
//     console.log('Button No2');
// });

// buttonNo2.addEventListener('click', _ => console.log('Button No2'));

const sum1 = function(a, b) {
    return a + b;
}
console.log(sum1(5, 3));



// ARROW FUNCTION
const sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(5, 3));



// jeigu funkcijos bloke yra tik 1 eilutė, galime suprastinti

const sum3 = (a, b) => a + b;
console.log(sum3(5, 3));


//----------------------------------------------------------------------------------------------------

const add5 = function(a) {
    return a + 5;
}
console.log(add5(12));



const add5a = (a) => {
    return a + 5;
}
console.log(add5a(12));


// Jeigu yra tik 1 parametras, galima praleisti parametrų skliaustelius;      <================= SVARBUS KOMENTARAS
const add5b = a => a + 5;

console.log(add5b(12));

//----------------------------------------------------------------------------------------------------


const bebras1 = () => {
    return 'BEBRAS';
}

const bebras2 = () => 'BEBRAS 2';

const bebras3 = nenaudoju => 'BEBRAS 3';

// Kintamasis vardu _ yra naudojamas sintaksei užpildyti, bet nenaudojamas skaičiavimuose
const bebras4 = _ => 'BEBRAS 4'

console.log(bebras1());
console.log(bebras2());
console.log(bebras3());
console.log(bebras4());

//----------------------------------------------------------------------------------------------------

console.clear();

buttonNo2.addEventListener('click', _ => console.log('Button No2'));

console.clear();


//----------------------------------------------------------------------------------------------------
// NAUJA TEMA
//----------------------------------------------------------------------------------------------------

//CIKLAI ---------------- CYCLES


for(let i = 0; i < 10; i++) {
    console.log('Bla bla', i);
}


// for(let i = 0; i > -10; i--) {
//     console.log('Bla bla', i);
// }


// Panaudojimas 1. Radimas 2. Agregacija


//1. Čia yra RADIMAS. Pvž, randam 'r' raidę žodyje
// const word = 'rabarbaras';

// let found = '"r" raidė nerasta';

// for (let i = 0; i < word.length; i++) {
//     if (word[i] == 'r') {
//         found = `"r" rasta ${i} vietoje`; // užrašas ${i} NIEKO BENDRO su ciklu neturi
//     }
// } // blokas kartojasi

// console.log(found); //nėra ciklo bloke ir nesikartoja



//2. Čia yra AGREGACIJA.


const word = 'rabarbaras';

let found = '"r" raidė nerasta';
let count = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found = `"r" rasta ${i} vietoje`; // užrašas ${i} NIEKO BENDRO su ciklu neturi
    }
} // blokas kartojasi

console.log(found); // nėra ciklo bloke ir nesikartoja

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        count++
    }
} // blokas kartojasi

console.log(`Žodyje ${word} yra ${count} "r"`); // nėra ciklo bloke ir nesikartoja

let found1 = '';

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found1 += `"r" rasta ${i} vietoje \n`; // užrašas ${i} NIEKO BENDRO su ciklu neturi  \n spec simbolis "nauja eilutė"
    }
} // blokas kartojasi

console.log(found1); // nėra ciklo bloke ir nesikartoja

/*

CIKLAI:
for
while
do while
for in
for of
switch

CIKLO VALDYMAS:
break
continue

*/