


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const atsakymas18 = document.querySelector('p[data-18] > span');
const atsakymas24 = document.querySelector('p[data-24] > span');
const atsakymas30 = document.querySelector('p[data-30] > span');

let pasisveikinimai = document.querySelectorAll('#labasRytas > p');

console.log(pasisveikinimai);
console.log(pasisveikinimai.length);

let sriftas18 = 0;
let sriftas24 = 0;
let sriftas30 = 0;

for (let i = 0; i < pasisveikinimai.length; i++) {
    if (pasisveikinimai[i].style.fontSize == '18px') {
        sriftas18 += 1;
    } else {
        if (pasisveikinimai[i].style.fontSize == '24px') {
            sriftas24 += 1;
        } else {
            sriftas30 += 1;
        }
    }
}

atsakymas18.innerText = sriftas18;
atsakymas24.innerText = sriftas24;
atsakymas30.innerText = sriftas30;

//------------------------------------------------------------------------------------------------------------------------

// 3. Jei krepšelio suma mažesnė nei 100 eur - pristatymas 19.99 eur
// Krepšelio suma nuo 100eur iki 700 eur - pristatymas 9.99 eur
// Krepšelio sumai nuo 700 eur - pristatymas nemokamas ir taikoma 10% nuolaida.
// krepšelio suma atsitiktinis skaičius nuo 20 iki 1000 eur


let krSuma = document.querySelector('.uzduotis3 > p > span');
let prKaina = document.querySelector('.uzduotis3 > p + p > span');
let nuolaida = document.querySelector('.uzduotis3 > p + p + p > span');
let kainaGalutine = document.querySelector('.uzduotis3 > p + p + p + p > span')



let krepselis = rand(20, 1000);
let nuolaidosSuma = 0;
let pristatymoKaina = 0;

if (krepselis < 100) {
    pristatymoKaina = 19.99;
} else {
    if (krepselis >= 100 && krepselis < 700) {
        pristatymoKaina = 9.99;
    } else {
        nuolaidosSuma = krepselis * 0.1;
    }
}

krSuma.innerText = krepselis;
prKaina.innerText = pristatymoKaina;
nuolaida.innerText = nuolaidosSuma.toFixed(2);
kainaGalutine.innerText = (krepselis + pristatymoKaina - nuolaidosSuma).toFixed(2);

