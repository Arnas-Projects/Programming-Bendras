


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];



// Task 1 ------------------------------------------------------------------------------------------------------
/* 
    Tiesiogiai HTML faile rankiniu būdu sukurkite du 
    tuščius <h2> tagus ir vieną mygtuką. Paspaudus 
    mygtuką kiekvienam tagui sugeneruotkite rand() 
    atskirą skaičių nuo 1 iki 6 ir jį įrašykite į 
    tago vidų naudojant innerText() metodą. Paspaudus 
    mygtuką skaičiai turi būti pergeneruojami iš naujo. 
    Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti 
    raudonai.
*/
console.log('\nTask 1');


const randNumButton = document.querySelector('.task1-btn');
const h2One = document.querySelector('.nr1-h2');
const h2Two = document.querySelector('.nr2-h2');


const numbersChangerFunction = _ => {

    const random1 = rand(1, 6);
    const random2 = rand(1, 6);

    h2One.innerText = random1;
    h2Two.innerText = random2;

    if (h2One.innerText == h2Two.innerText) {
        h2One.style.color = 'crimson';
        h2Two.style.color = 'crimson';
    } else {
        h2One.style.color = '';
        h2Two.style.color = '';
    }
};


randNumButton.addEventListener('click', numbersChangerFunction);



// Task 2 ------------------------------------------------------------------------------------------------------
/* 
    Tiesiogiai HTML faile rankiniu būdu sukurkite 
    <h3> tagą ir vieną mygtuką. Susikurkite tuščią 
    masyvą, skaičiams saugoti. Paspaudus mygtuką, 
    sugeneruokite rand() skaičių nuo 1 iki 10. 
    Sugeneruotą skaičių pridėkite į masyvą, o tą 
    masyvą atspausdinkite konsolėle. <h3> tage 
    skaičiuokite ir su innerText() metodu rašykite 
    visų sugeneruotų skaičių sumą.
*/
console.log('\nTask 2');


const h3Tag = document.querySelector('.task2-h3');
const mygtukas2 = document.querySelector('.task2-btn');


const skaiciuSaugykla = [];


const skaiciuGeneratorius = _ => {

    let suma = 0;
    const randomNum = rand(1, 10);
    skaiciuSaugykla.push(randomNum);
    console.log(skaiciuSaugykla);

    skaiciuSaugykla.forEach(skaicius => {

        suma += skaicius;
        h3Tag.innerText = suma;
    });
};

mygtukas2.addEventListener('click', skaiciuGeneratorius);



// Task 3 ------------------------------------------------------------------------------------------------------
/* 
    Tiesiogiai HTML faile rankiniu būdu sukurkite 
    <ul> tagą. JS pagalba perskaitykite masyvą 
    africa ir naudodami createElement()  ir kitus 
    reikalingus metodus sukurkite kiekvienam masyvo 
    elementui po <li> tagą su elemento stringu viduje 
    ir juos įrašykite į <ul> tago vidų. Elementus su 
    tuščiais stringais praleiskite ir jiems <li> 
    elementų nekurkite.
*/
console.log('\nTask 3');


const ulTag = document.querySelector('.task3-ul');

const filteredAfrica = africa.filter(gyvunas => {

    if (gyvunas == '') {
        return false;
    } else {
        return true;
    }
});

filteredAfrica.forEach(gyvunas => {

    const liTag = document.createElement('li');
    liTag.innerText = gyvunas;
    ulTag.appendChild(liTag);
});


// Alternative - šitas su proto bokšto pagalba

// const filteredAfrica = africa.filter(gyvunas => gyvunas != '');

// filteredAfrica.forEach(gyvunas => {

//     const liTag = document.createElement('li');
//     liTag.innerText = gyvunas;
//     ulTag.appendChild(liTag);
// });



// Alternative 2 - proto bokštas help

// africa.forEach(zveris => {

//     if (zveris == '') {
//         return;
//     }

//     const liTag = document.createElement('li');
//     liTag.innerText = zveris;
//     ulTag.appendChild(liTag);
// });




// Task 4 ------------------------------------------------------------------------------------------------------
/* 
    Tiesiogiai HTML faile rankiniu būdu 
    sukurkite du tuščius input laukelius, 
    vieną <h5> tagą ir du mygtukus: “+” 
    ir “-”. Suprogramuokite kalkuliatorių 
    taip, kad įrašius skaičius į abu input 
    laukelius ir paspaudus atitinkamą mygtuką 
    su skaičiais būtų atlikta atitinkama 
    aritmetinė operacija, o jos rezultatas 
    būtų atvaizduotas <h5> tage. Pasirinkite 
    patys sau patogiausius metodus tai atlikti.

*/
console.log('\nTask 4');


const input1 = document.querySelector('.nr1-input');
const input2 = document.querySelector('.nr2-input');
const buttonPlus = document.querySelector('button.plus');
const buttonMinus = document.querySelector('button.minus');
const h5Tag = document.querySelector('.task4-h5');


buttonPlus.addEventListener('click', _ => {

    const number1 = parseFloat(input1.value);
    const number2 = parseFloat(input2.value);

    let rezultatasSuma;

    if (isNaN(number1) || isNaN(number2)) {
        return h5Tag.innerText = 'Addition failed: wrong data';
    } else {
        rezultatasSuma = number1 + number2;
    }

    h5Tag.innerText = rezultatasSuma;
});


buttonMinus.addEventListener('click', _ => {

    const number1 = parseFloat(input1.value);
    const number2 = parseFloat(input2.value);

    let rezultatasSkirtumas;

    if (isNaN(number1) || isNaN(number2)) {
        return h5Tag.innerText = 'Subtraction failed: wrong data';
    } else {
        rezultatasSkirtumas = number1 - number2;
    }

    h5Tag.innerText = rezultatasSkirtumas;
});



// Alternative - proto bokšto variantas - no repetition

// const calculate = operation => {
//     const n1 = parseFloat(input1.value);
//     const n2 = parseFloat(input2.value);
//     h5Tag.innerText = operation(n1, n2);
// };

// buttonPlus.addEventListener('click', () => calculate((a, b) => a + b));
// buttonMinus.addEventListener('click', () => calculate((a, b) => a - b));




// Task 5 ------------------------------------------------------------------------------------------------------
/* 
    Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. 
    JS pagalba perskaitykite masyvą australia ir kiekvieną 
    masyvo elementą įrašykite į stringą su <li> tagais iš 
    abiejų pusių, o visus gautus stringus sudėkite į vieną 
    bendrą stringą. Tą stringą naudodami innerHTML() metodą 
    įdėkite į <ul> tago vidų. Generavimo metu “Dingo” 
    background’ą nuspalvinkite mėlynai.
*/
console.log('\nTask 5');

const ul5Tag = document.querySelector('.task5-ul');


australia.forEach(animal => {

    const liTag = document.createElement('li');
    liTag.innerHTML = animal;
    ul5Tag.appendChild(liTag);

    if (animal == 'Dingo') {
        liTag.style.backgroundColor = 'skyblue';
    } else {
        liTag.style.backgroundColor = '';
    }
});




// ALTERNATIVE - protingų smegenų variantas

// let liString = '';

// australia.forEach(animal => {

//     if (animal == 'Dingo') {
//         liString += `<li style="background-color: blue;">${animal}</li>`;
//     } else {
//         liString += `<li>${animal}</li>`;
//     }

// });

// ul5Tag.innerHTML = liString;









