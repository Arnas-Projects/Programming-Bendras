


const numbersArray = [45, 5, 87, 96, -1, 51, 0, 36];


// rasti 96 indeksą

let FoundNumberIndex = -1;


// forEach pavyzdžiui šitos const funkcijos nebereik

// const FoundNumberFunction = (number, i) => {
//     if (number == 96) {
//         FoundNumberIndex = i;
//     }
// };


// for (let i = 0; i < numbersArray.length; i++) {
//     FoundNumberFunction(numbersArray[i], i);
// };

// for analogija
// numbersArray.forEach(FoundNumberFunction);

// Teisingas forEach variantas
numbersArray.forEach((number, i) => {
    if (number == 96) {
        FoundNumberIndex = i;
    }
});

console.log(FoundNumberIndex);


const animals = [
    {
        name: 'Briedis',
        age: 54,
    },
    {
        name: 'Lapė',
        age: 12,
    },
    {
        name: 'Vilkas',
        age: 8,
    },
    {
        name: 'Kiškis',
        age: 4,
    },
    {
        name: 'Erelis',
        age: 16,
    },
    {
        name: 'Voverė',
        age: 3,
    },
];


// Kiek Vilkui metų - spręsti naudojant forEach
console.log('\nTask - Vilko metai');

let VilkoMetai;
let VilkoIndex = -1;

animals.forEach((zveris, i) => {
    if (zveris.name == 'Vilkas') {
        VilkoMetai = zveris.age;
        VilkoIndex = i;
    }
});

console.log('Vilko amžius:', VilkoMetai, 'Vilko indeksas +1:', VilkoIndex + 1);











































































































































