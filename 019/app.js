


const animal = {
    name: 'Zuikis',
    eat: 'morka',
    tail: 'trumpa',
};

const colorPensObj = {
    one: 'Raudona',
    two: 'Žalias',
    four: 'Geltonas',
};

console.log(colorPensObj.two);

// Masyvas yra objektas, skirtas saugoti vienodiems, iš eilės sudėliotiems kintamiesiems
const colorPens = [
    'Raudona', // Raudono indeksas yra [0]
    'Žalias', // Žalio indeksas yra [1]
    'Geltonas',
];

console.log(colorPens);

console.log(colorPens[1]);

colorPens[1] = 85;
colorPens[7] = 'Juodas';

//1, 7 vadinami indeksais




console.log(colorPens);
console.log(colorPens[3], colorPens.length);

const animals = [];

animals[0] = 'Bebras';
animals[1] = 'Barsukas';

animals.push('Briedis'); // dedam sekantį iš eilės elementą
animals.push('Vilkas');
animals.push('Zuikis', 'Kiškis'); // pridedam kelis (daug) iškart

console.log(animals);



const word = 'rabarbaras';

let found = []
for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found.push(i); // dedam 'r' raidės vietą
    }
}

console.log(found);

// 1. padaryti masyvą iš skaičių 55, 77, 2 (naudojant push)
const numbers = [];

numbers.push(55, 77, 2);

console.log(numbers);

let loopas;

let saugiklis = 100;

// 2.

const myNumbers2 = [];

for (let i = 1; i <= 100; i++) {
    myNumbers2.push(i);
}

console.log(myNumbers2);


const h2First = document.querySelector('h2');
const h2Second = document.querySelector('h2 + h2');

console.log(h2First.innerText);
console.log(h2Second.innerText);

const h2All = document.querySelectorAll('h2'); //node list - kuris, iš principo yra masyvas

console.log(h2All[2].innerText);

for (let i = 0; i < h2All.length; i++) {
    console.log(h2All[i].innerText);
}


h2Second.style.color = 'crimson';

// h2All[0].style.color = 'skyblue';

//innerHTML
for (let i = 0; i < h2All.length; i++) {
    console.log(h2All[i].style.color = 'skyblue');
}

//3. Elemente <section> sukurti 3 h3 tagus

const sekcija = document.querySelector('section');

for (let i = 1; i <= 100; i++) {
    const h3Tagas = document.createElement('h3');
    h3Tagas.innerText = i;
    sekcija.appendChild(h3Tagas);
}

console.clear();

const colors = [];

colors.push('Red');
colors.push('Blue');
colors.push('Green');

colors.unshift('Black');

console.log(colors);


