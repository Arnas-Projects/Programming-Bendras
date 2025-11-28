


console.log('publika, vaziuojam')

const numbersArray = [45, 5, 87, 96, -1, 51, 0, 36];

//rasti 96 indeksą

let indexOf96 = -1;

// const find96Index = (number, i) => {
//     if (number == 96) {
//         indexOf96 = i;
//     }
// }

// for (let i = 0; i < numbersArray.length; i++) {

//     find96Index(numbersArray[i], i);

// }

// for analogija
// Taip kaip visada rašysime
numbersArray.forEach((number, i) => {
    if (number == 96) {
        indexOf96 = i;
    }
});




console.log(indexOf96);

const animals = [
    {
        name: 'Briedis',
        age: 54
    },
    {
        name: 'Lapė',
        age: 12
    },
    {
        name: 'Vilkas',
        age: 8
    },
    {
        name: 'Kiškis',
        age: 4
    },
    {
        name: 'Erelis',
        age: 16
    },
    {
        name: 'Voverė',
        age: 3
    }
];

// Kiek Vilkui metų - spręsti naudojant forEach

let letsFindIndex = -1;

animals.forEach((animal) => {
    if (animal.name == 'Vilkas') {
        letsFindIndex = animal.age;
    }
});

console.log(letsFindIndex);



const animals2 = [
    {
        name: 'Briedis',
        age: 54
    },
    {
        name: 'Lapė',
        age: 12
    },
    {
        name: 'Vilkas',
        age: 8
    },
    {
        name: 'Kiškis',
        age: 4
    },
    {
        name: 'Erelis',
        age: 16
    },
    {
        name: 'Voverė',
        age: 3
    }
];

let vilkoAmzius; // undefined

// nepriskiriam undefined - tada kai turim primityvų tipą number, string
// priskiriam -1 kai skaičiuojam indeksus
// priskiriam null - tada kai turim objektą, nes null yra objektas, kuris neegzistuoja
// priskiriam pradinę reikšmę, dažniausiai 0, jeigu darome agregacijas. Pvz: (skaičiuojam sumą)

animals2.forEach(zveris => {  //zveris pačio sugalvotas parametras, kurį naudosime funkcijoj
    if (zveris.name == 'Vilkas') {
        vilkoAmzius = zveris.age;
    }
});

console.log(vilkoAmzius);

// Koks visų gyvūnų bendras amžius? (Susumuoti visus metus)

let gyvunuAmzius = 0;

animals2.forEach((zveris) => {  //zveris pačio sugalvotas parametras, kurį naudosime funkcijoj
    if (zveris.age > 0) {
        gyvunuAmzius += zveris.age;
    }
});

console.log(gyvunuAmzius, (gyvunuAmzius / animals2.length).toFixed(2));

const desertEagle = animals.find(zveris => {
    let arTas;
    if (zveris.name == 'Erelis') {
        arTas = true;
    } else {
        arTas = false;
    }
    return arTas;
});

console.log(desertEagle);

const surastasKiskis = animals.find(zveris => zveris.name == 'Kiškis');

console.log(surastasKiskis);

const kiskioMetai1 = animals.find(zveris => zveris.name == 'Kiškis').age;

console.log(kiskioMetai1);

const { 'age' : kiskioMetai2, name } = animals.find(zveris => zveris.name == 'Kiškis');

console.log(kiskioMetai2, name);

const animalsAgePlus1 = animals.map(zveris => {
    const zverisPlus = {};
    zverisPlus.name = zveris.name;
    zverisPlus.age = zveris.age + 1
    return zverisPlus;

});

console.log(animalsAgePlus1);

const animalsAgePlus1a = animals.map(zveris => ({ ...zveris, age: zveris.age +1 }));

console.log(animalsAgePlus1, animalsAgePlus1a);

const ufo1 = {
    speed: 500,
    size: 'Big',
    power: 2000,
};

const ufo2 = ufo1; // priskyrimas by reference;

const ufo3 = {...ufo1}; // ---> {speed: 500, size: 'Big', power: 2000}

ufo2.power = 3000;

console.log(ufo1, ufo2, ufo3);
























