


console.log('Map & Set');
console.log('\n');


const array = []; // sutrumpintas
const array1 = new Array(); // pilnas

array.push('crimson');
array.push('blue');
array.push('baravykas');

console.log(array, array.length);
console.log(array[2]); // gauti baravyką

const mapas = new Map(); // pilnas, sutrumpinto varianto nėra

console.log(`Type: ${typeof mapas}`);

mapas.set('spalva1', 'crimson');
mapas.set('spalva2', 'blue');
mapas.set('grybas', 'baravykas');
mapas.set('spalva2', 'black');
mapas.set(87, 'skaičius');
mapas.set({ raktas: 123 }, 'objektas1'); // raktas yra objektas su nuoroda į niekur. Galimybės gauti objektą nėra
mapas.set({ raktas: 123 }, 'objektas2');

const function1 = _ => _;

mapas.set(function1, 'function1');

const o123 = { bla: 123 };

mapas.set(o123, 'objektas3');

console.log(mapas, mapas.size);

console.log(mapas.get('grybas')); // gauti baravyką. Naudojam 'raktą', ne indeksą
console.log(mapas.get({ raktas: 123 })); // raktas yra naujas objektas

console.log({ raktas: 123 } == { raktas: 123 }); // objektai lyginami pagal nuorodą, o ne reikšmę

console.log(mapas.get(o123)); // raktas yra objektas, bet jau aprašytas su kintamuoju
console.log(mapas.get(function1)); // raktas yra funkcija

console.log('\n');


// map turi forEach ciklą (kitko ką turi masyvas - neturi)

mapas.forEach((verte, raktas) => {
    console.log(raktas, '===>', verte);
});


console.log('\n');


const fancyMap = new Map();

fancyMap.set(a => a * 3, 5);
fancyMap.set(a => a * 3, 8);
fancyMap.set(a => a * 10, 5);
fancyMap.set(a => a * 10, 15);
fancyMap.set(a => a / 3, 2);


console.log(fancyMap);

fancyMap.forEach((value, func) => {
    console.log(Number((func(value)).toFixed(2)));
});


console.log('\n');


console.log(mapas.has(87)); // ar yra elementas su tokiu raktu
mapas.delete(87);
console.log(mapas.has(87));
console.log(mapas.has('labas')); // ar yra elementas su tokiu raktu


// sortinimas

const arrayFromMap = [...mapas];

console.log(arrayFromMap);

arrayFromMap.sort((a, b) => {
    a[1].localeCompare(b[1]);
});

console.log(arrayFromMap);

const sortedMap = new Map(arrayFromMap); // ne tuščias, o pagal duomenis iš masyvo

console.log(sortedMap);

// -------------------------------------------------------------------------------------------

// SET
console.log('\n\nSET');
console.log('\n');


const setas = new Set();

setas.add('crimson');
setas.add('blue');
setas.add('cheetah');
setas.add('crimson'); // setas yra unikalių reikšmių rinkinys. Vienodų reikšmių būti negali.

console.log(setas);

console.log(setas, setas.size, setas.has('crimson'), setas.delete('crimson'), setas.has('crimson'));

console.log('\n');


// for in
// for of


for (let i = 0; i < array.length; i++) {
    console.log(i, '===>', array[i]);
};

for (const element of array) {
    console.log(element);
};


console.log('\n');


for (const element in array) {
    console.log(element);
};


// neiteruojamas, t.y. objektas neturintis indeksų

const obj = {
    kas: 'Malkos',
    kam: 'Krosniai',
    kodel: 'Nes šalta'
};


// for in skirtas pagrinde neiteruojamų objektų iteracijai

for (const prop in obj) {
    console.log(prop, ':', obj[prop]); // savybės vardas įrašytas į kintamąjį "prop", todėl [prop]
};





