




// Loginis kintamasis - Boolean

const taip = true; // Štai čia yra loginis kintamasis Boolean
const ne = false;  // Štai čia yra loginis kintamasis Boolean

console.log(taip, typeof taip);
console.log(ne, typeof ne);

let bebras = 'Bebras'; // true
const nieko = ''; // false



/*

Neigimas !
Arba ||
Ir &&

*/


console.log('!taip', !taip);
console.log('!ne', !ne);

{

    console.log('!!taip', !!taip);
    console.log('!!ne', !!ne);

}

console.log('!!Bebras', !!bebras);
console.log('!!nieko', !!nieko);


if (!bebras) {
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
    console.log('Taip');
} else {
    console.log('Ne');
}


/*

>   daugiau
<   mažiau
>=  daugiau arba lygu
<=  mažiau arba lygu
=   priskyrimas, assignment
==  lygu
=== griežtai lygu

*/


if (0) {
    console.log('Taip');
} else {
    console.log('Ne');
}


console.clear();

const sk1 = -124;
let sk2 = 0;
const sk3 = NaN;
const sk4 = Infinity;

console.log('-124 ==>', !!sk1, '0 ==>', !!sk2, 'NaN ==>', !!sk3, 'Infinity ==>', !!sk4);

if (10 === '10') {
    console.log('Yes');
} else {
    console.log('No');
}


if ('a' > 'A') {
    console.log('a > A', 'Yes');
} else {
    console.log('a > A', 'No');
}


if ('Bebras' > 'Barsukas') {
    console.log('Bebras > Barsukas', 'Yes');
} else {
    console.log('Bebras > Barsukas', 'No');
}


const animalInput = document.querySelector('input');

animalInput.style.border = '3px solid skyblue';

animalInput.addEventListener('input', _ => {
    console.log('Rašo!', animalInput.value);
    if (animalInput.value.length === 0) {
        animalInput.style.backgroundColor = 'white';
    } else if (animalInput.value.length <= 7) {
        animalInput.style.backgroundColor = 'lightgreen';
    } else {
        animalInput.style.backgroundColor = 'crimson';
    }
});


const mygtukas = document.querySelector('button');

mygtukas.addEventListener('click', (e) => {
    console.log('clickinam buttona');
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

console.clear();


// LOGINIAI OPERATORIAI
console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
 
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);


// if (5 > 10 || 10 > 3) {
//     console.log('TAIP');
// } else {
//     console.log('NE');
// }

// if (5 > 10 && 10 > 3) {
//     console.log('TAIP');
// } else {
//     console.log('NE');
// }



