


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

mapas.set('spalva1', 'crimson');
mapas.set('spalva2', 'blue');
mapas.set('grybas', 'baravykas');
mapas.set('spalva2', 'black');
mapas.set(87, 'skaičius');
mapas.set({raktas: 123}, 'objektas1'); // raktas yra objektas su nuoroda į niekur. Galimybės gauti objektą nėra
mapas.set({raktas: 123}, 'objektas2');

const function1 = _ => _;

mapas.set(function1, 'function1');

const o123 = {bla: 123};

mapas.set(o123, 'objektas3');

console.log(mapas, mapas.size);

console.log(mapas.get('grybas')); // gauti baravyką. Naudojam 'raktą', ne indeksą
console.log(mapas.get({raktas: 123})); // raktas yra naujas objektas

console.log({raktas: 123} == {raktas: 123}); // objektai lyginami pagal nuorodą, o ne reikšmę

console.log(mapas.get(o123)); // raktas yra objektas, bet jau aprašytas su kintamuoju
console.log(mapas.get(function1)); // raktas yra funkcija






