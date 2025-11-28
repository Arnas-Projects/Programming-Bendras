console.log('Labas, Ifai');


// Loginis Boolean

const taip = true;
const ne = false;

console.log(taip, typeof taip);
console.log(ne, typeof ne);

let bebras = 'Bebras'; // true
const nieko = ''; //false

/*

Neigimas !
Arba ||
Ir &&

*/

console.log('!taip', !taip);
console.log('!ne', !ne);


console.log('!taip', !!taip);
console.log('!!ne', !!ne);

{

    console.log('!!bebras', !!bebras);
    console.log('!!nieko', !!nieko);

}


if (bebras) {       //tarsi klaustume "ar bebras yra true ar false"
    console.log('TAIP');
} else {
    console.log('NE');
} 

if (nieko) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (5 > 13) {
    console.log('TAIP');
} else {
    console.log('NE');
}


/*


>
<
>=      // daugiau arba lygu
<=      // mažiau arba lygu
=       // PRISKYRIMAS pvz kintamojo prie reiksmes. Pvz Antanas lygus Petrui
==      // Lygybė, pvz užduodant klausimą if...
===     // Griežta lygybė


*/

const sk1 = -124;
let sk2 = 0;
const sk3 = NaN;
const sk4 = Infinity;

console.log(!!sk1, !!sk2, !!sk3, !!sk4);

if (10 == '10') {
    console.log('TAIP');
} 

else {
    console.log('NE');
}


if (10 === '10') {
    console.log('TAIP');
} else {
    console.log('NE');
}


if ('Bebras' > 'Barsukas') {
    console.log('TAIP');
} else {
    console.log('NE');
}


// input funkcija

const animalInput = document.querySelector('input'); //dom'as Document Object Model

animalInput.style.border = '1px solid skyblue';

animalInput.addEventListener('input', _ => {
    console.log('Rašo!', animalInput.value);
    if (animalInput.value.length > 7) {
        animalInput.style.border = '1px solid crimson';
    } else {
        animalInput.style.border = '1px solid skyblue';
    }
});

if (55 > 111) {
    console.log('Šaka 1');
} else if (5 == 51) {
    console.log('Šaka 2');
} else if (5 == 5) {
    console.log('Šaka 55');
} else {
    console.log('Šaka 3');
}

// console.clear();


// LOGINIAI OPERATORIAI
console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
 
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);


if (5 > 10 || 10 > 3) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (5 > 10 && 10 > 3) {
    console.log('TAIP');
} else {
    console.log('NE');
}


