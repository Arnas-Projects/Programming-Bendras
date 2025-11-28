function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}





let myVar1 = 54 + 2;
console.log(myVar1, typeof myVar1);


let myResultDiv = document.querySelector('div.my-result');

myResultDiv.innerText = myVar1;
myResultDiv.style.fontSize = '60px';

// font-size ===> fontSize,     nes kintamasis negali turėti "minusų, brukšniukų"
// 160px ====> '160px', nes be kabučių būtų kintamojo vardas arba skaičius

let myH2 = document.querySelector('h2');
myH2.style.color = 'crimson';
myH2.style.letterSpacing = '5px';

//Parašyti JS kodą, kuris antrą h2 nuspalvintų oranžine spalva


let h2Second = document.querySelector('h2 + h2');
h2Second.style.color = 'orange';

let myFancyNumber = rand(0, 20);

console.log(myFancyNumber);

console.clear();

const A = 11;
const B = 5;

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B); // 5 + 5 + 1

console.log(9 % 2); // 2 + 2 + 2 + 2 + 1

console.log(0.2 + 0.4);

/*

2 4 8 16 32 64 128 256 512 1024 2048 4096 8192

*/

const S = 0.2 + 0.4;

myResultDiv.innerText = S.toFixed(2); // suformatavimas ir vertimas į stringą


let L = 1;
const C = 1;

L = 2;

console.log(L, C);

const string = '25';

const number = parseInt(string); // stringą keičiame į skaičių

console.log(5 + string, 5 + number);


let funNumber = 2;

funNumber++; // didinimas vienetu
funNumber++;

// console.log(funNumber++); // konsolė išloggina kintamajį, šiuo atveju funNumber IR TIK TADA ŠITA KONSOLĖ PRIDEDA +1

console.log(funNumber);

console.log(++funNumber);

console.log(funNumber);

const what = funNumber++ * ++funNumber * funNumber++ * ++funNumber;

console.log(what);
console.clear();

let bananas = 'bananas';

bananas++;

console.log(bananas, typeof bananas);

let daug = 5 / 0;

console.log(daug, typeof daug);

const animal1 = 'Bebras';
const action1 = 'eina namo';

const animal1InAction1 = animal1 + ' ' + action1; // suklijavimas

console.log(animal1InAction1);

myResultDiv.innerText = animal1InAction1;

console.log(animal1[3], animal1[0], animal1[52], typeof animal1[52]);

console.log(animal1.length, animal1InAction1.length);

let kas;

console.log(kas);

// console.log(kur);

const animal2 = 'žąsinas';

console.log(animal2.length);


