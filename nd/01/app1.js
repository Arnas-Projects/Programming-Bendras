function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// let myFancyRandom = rand(5,18);
// console.log (myFancyRandom);
// console.clear();


//-----------------------------------------------------------------------------------------
// Task #1
const hash1 = document.querySelector('h1');
hash1.style.color = '#0d7924ff';
hash1.style.fontStyle = 'italic';
hash1.style.margin = '0px 43px';
hash1.innerText = 1;

const hash2 = document.querySelector('h2');
hash2.style.color = '#0c0cc4ff';
hash2.style.fontStyle = 'italic';
hash2.style.margin = '0px 30px';
hash2.innerText = 2;

const hash3 = document.querySelector('h3');
hash3.style.color = '#dc143c';
hash3.style.margin = '0px 20px';
hash3.innerText = '3';

const hash4 = document.querySelector('h4');
hash4.innerText = 4;


//-----------------------------------------------------------------------------------------
// Task #2
const bodyAbsolute = document.querySelector('body')
bodyAbsolute.style.position = 'relative';

const blueSquareDiv = document.querySelector('div');
blueSquareDiv.style.border = '5px solid #0000ff';
blueSquareDiv.style.backgroundColor = '#0000ff70';
blueSquareDiv.style.width = '150px';
blueSquareDiv.style.height = '150px';
blueSquareDiv.style.margin = '50px';
blueSquareDiv.style.display = 'flex';
blueSquareDiv.style.justifyContent = 'center';
blueSquareDiv.style.alignItems = 'center';
blueSquareDiv.style.color = 'white';
blueSquareDiv.style.fontFamily = 'monospace';
blueSquareDiv.style.fontSize = '16px';
blueSquareDiv.innerText = 'Labas,';

const redCircleDiv = document.querySelector('div + div');
redCircleDiv.style.boxSizing = 'border-box';
redCircleDiv.style.border = '5px solid #dc143c';
redCircleDiv.style.backgroundColor = '#dc143ca1';
redCircleDiv.style.width = '150px';
redCircleDiv.style.height = '150px';
redCircleDiv.style.margin = '50px';
redCircleDiv.style.borderRadius = '50%';
redCircleDiv.style.position = 'absolute';
redCircleDiv.style.top = '330px';
redCircleDiv.style.left = '200px';
redCircleDiv.style.display = 'flex';
redCircleDiv.style.justifyContent = 'center';
redCircleDiv.style.alignItems = 'center';
redCircleDiv.style.color = 'white';
redCircleDiv.style.fontFamily = 'monospace';
redCircleDiv.style.fontSize = '16px';
redCircleDiv.innerText = 'Bebrai!';



//-----------------------------------------------------------------------------------------
// Task #3
const randomNumber1 = rand(0, 4);
const randomNumber2 = rand(0, 4);

const idGo3 = document.querySelector('#go3');
const spanas = idGo3.querySelectorAll('span');

let bigNumber;      //Kadangi kintantis skaičius, tai naudojamas 'let' kintamasis
let smallNumber;    //Kadangi kintantis skaičius, tai naudojamas 'let' kintamasis


if (randomNumber1 > randomNumber2) {
    bigNumber = randomNumber1;
    smallNumber = randomNumber2;
} else {
    bigNumber = randomNumber2;
    smallNumber = randomNumber1;
}

const result = bigNumber / smallNumber;

spanas[0].style.fontSize = '36px';
spanas[0].innerText = bigNumber;

spanas[1].style.fontSize = '36px';
spanas[1].innerText = smallNumber;

spanas[2].style.fontSize = '36px';
spanas[2].innerText = result;


//TASK #3 KITAS SPRENDIMO BŪDAS

// const randNumb1 = rand(0, 4);
// const randNumb2 = rand(0, 4);

// const biggerNumb = Math.max(randNumb1, randNumb2);
// const smallerNumb = Math.min(randNumb1, randNumb2);
// const result = biggerNumb / smallerNumb

// // document.querySelector('#go3').textContent = result;

// const idGo3 = document.querySelector('#go3');
// const firstNumbSpan = idGo3.querySelector('span');
// const secondNumbSpan = idGo3.querySelector('span + span');
// const resultSpan = idGo3.querySelector('span + span + span');

// firstNumbSpan.innerText = biggerNumb;
// secondNumbSpan.innerText = smallerNumb;
// resultSpan.innerText = result;


//-----------------------------------------------------------------------------------------
// Task#4
const circle1 = rand(50, 200);
const circle2 = rand(50, 200);
const circle3 = rand(50, 200);

const idGo4 = document.querySelector('#go4');
idGo4.style.display = 'flex';

const divuDivai = idGo4.querySelectorAll('div');



let small
let medium
let big

if (circle1 > circle2 && circle1 > circle3) {
    big = circle1;
} else if (circle2 > circle1 && circle2 > circle3) {
    big = circle2;
} else {
    big = circle3;
}

if (circle1 > circle2 && circle1 < circle3) {
    medium = circle1;
} else if (circle2 > circle1 && circle2 < circle3) {
    medium = circle2;
} else {
    medium = circle3;
}

if (circle1 < circle2 && circle1 < circle3) {
    small = circle1;
} else if (circle2 < circle1 && circle2 < circle3) {
    small = circle2;
} else {
    small = circle3;
}


divuDivai[0].style.border = '3px solid black';
divuDivai[0].style.width = small + 'px';
divuDivai[0].style.height = small + 'px';
divuDivai[0].style.borderRadius = '50%';
divuDivai[0].style.backgroundColor = '#4444448f';
divuDivai[0].style.fontSize = '10px';
divuDivai[0].style.fontFamily = 'monospace';
divuDivai[0].style.alignSelf = 'flex-end'
divuDivai[0].style.display = 'flex';
divuDivai[0].style.justifyContent = 'center';
divuDivai[0].style.alignItems = 'center';
divuDivai[0].style.margin = '5px'
divuDivai[0].style.color = 'white'
divuDivai[0].innerText = small;


divuDivai[1].style.border = '3px solid black';
divuDivai[1].style.width = medium + 'px';
divuDivai[1].style.height = medium + 'px';
divuDivai[1].style.borderRadius = '50%';
divuDivai[1].style.backgroundColor = '#4444448f';
divuDivai[1].style.fontSize = '14px';
divuDivai[1].style.fontFamily = 'monospace';
divuDivai[1].style.alignSelf = 'flex-end'
divuDivai[1].style.display = 'flex';
divuDivai[1].style.justifyContent = 'center';
divuDivai[1].style.alignItems = 'center';
divuDivai[1].style.margin = '5px'
divuDivai[1].style.color = 'white'
divuDivai[1].innerText = medium;


divuDivai[2].style.border = '3px solid black';
divuDivai[2].style.width = big + 'px';
divuDivai[2].style.height = big + 'px';
divuDivai[2].style.borderRadius = '50%';
divuDivai[2].style.backgroundColor = '#4444448f';
divuDivai[2].style.fontSize = '18px';
divuDivai[2].style.fontFamily = 'monospace';
divuDivai[2].style.alignSelf = 'flex-end'
divuDivai[2].style.display = 'flex';
divuDivai[2].style.justifyContent = 'center';
divuDivai[2].style.alignItems = 'center';
divuDivai[2].style.margin = '5px'
divuDivai[2].style.color = 'white'
divuDivai[2].innerText = big;



//TASK #4 KITAS SPRENDIMO BŪDAS

// const number1 = rand(200, 50);
// const number2 = rand(200, 50);
// const number3 = rand(200, 50);


// const allNumbers = [number1, number2, number3];
// allNumbers.sort((x, y) => x - y);
// console.log(allNumbers);


// const idGo4 = document.querySelector('#go4');
// idGo4.style.display = 'flex';

// const circles = idGo4.querySelectorAll('#go4 div');



// circles.forEach((div, i) => {
//     div.style.width = allNumbers[i] + 'px';
//     div.style.height = allNumbers[i] + 'px';
//     div.style.border = '4px solid #000000ff';
//     div.style.borderRadius = '50%';
//     div.style.alignSelf = 'flex-end';
//     div.style.margin = '10px';
//     div.style.innerText = '';
// });


//-----------------------------------------------------------------------------------------
// Task #5
const idGo5 = document.querySelector('#go5'); 

const spans = idGo5.querySelectorAll('span');

const number1 = rand(-10, 10);
const number2 = rand(-10, 10);
const number3 = rand(-10, 10);

spans[0].style.fontSize = '36px';
spans[0].style.margin = '7px';
spans[0].innerText = (number1 + ' ' + number1 + ' ' + number1);

spans[1].style.fontSize = '36px';
spans[1].style.margin = '7px';
spans[1].innerText = (number2 + ' ' + number2 + ' ' + number2);

spans[2].style.fontSize = '36px';
spans[2].style.margin = '7px';
spans[2].innerText = (number3 + ' ' + number3 + ' ' + number3);

if (number1 < 0) {
    spans[0].style.color = '#dc143c';
} else if (number1 > 0) {
    spans[0].style.color = '#141edcff';
} else {
    spans[0].style.color = '#0d7924ff';
}


if (number2 < 0) {
    spans[1].style.color = '#dc143c';
} else if (number2 > 0) {
    spans[1].style.color = '#141edcff';
} else {
    spans[1].style.color = '#0d7924ff';
}


if (number3 < 0) {
    spans[2].style.color = '#dc143c';
} else if (number3 > 0) {
    spans[2].style.color = '#141edcff';
} else {
    spans[2].style.color = '#0d7924ff';
}


//------------------------------------------------------------------------------
//Task #6

const idGo6 = document.querySelector('#go6');
const spanTag = idGo6.querySelectorAll('span');

const candles = rand(5, 3000);
const candlesValue = 1 * candles;
const discount0 = 0;
const discount3 = 3 / 100;
const discount4 = 4 / 100;


if (candles <= 1000) { 
    candlesDiscountValue = candles - (candles * discount0);
    spanTag[0].innerText = candles;
    spanTag[1].innerText = candlesValue;
    spanTag[2].innerText = discount0 * 100;
    spanTag[3].innerText = candlesDiscountValue;
} else if (candles <= 2000) {
    candlesDiscountValue = candles - (candles * discount3);
    spanTag[0].innerText = candles;
    spanTag[1].innerText = candlesValue;
    spanTag[2].innerText = discount3 * 100;
    spanTag[3].innerText = candlesDiscountValue;
} else {
    candlesDiscountValue = candles - (candles * discount4)
    spanTag[0].innerText = candles;
    spanTag[1].innerText = candlesValue;
    spanTag[2].innerText = discount4 * 100;
    spanTag[3].innerText = candlesDiscountValue;
} 


//------------------------------------------------------------------------------
//Task #7

const idGo7 = document.querySelector('#go7');
const divShape = idGo7.querySelector('div');
divShape.style.margin = '15px';

// let square = divShape;
// let circle = divShape;
// let triangle = divShape;

// const square = idGo7.querySelector('div');
// const circle = idGo7.querySelector('div');
// const triangle = idGo7.querySelector('div');

let currentShape = rand(0, 2);

if (currentShape === 0) {
    divShape.style.width = '250px';
    divShape.style.height = '250px';
    divShape.style.border = '4px solid #000000';
    divShape.style.backgroundColor = '#00000070';
} else if (currentShape === 1) {
    divShape.style.width = '250px';
    divShape.style.height = '250px';
    divShape.style.border = '4px solid #000000';
    divShape.style.borderRadius = '50%';
    divShape.style.backgroundColor = '#00000070';
} else {
    divShape.style.width = '0';
    divShape.style.height = '0';
    divShape.style.borderLeft = '150px solid transparent';
    divShape.style.borderRight = '150px solid transparent';
    divShape.style.borderBottom = '250px solid #00000070';
}


//------------------------------------------------------------------------------
//Task #8
const idGo8 = document.querySelector('#go8');
const spanColor = idGo8.querySelectorAll('span');
const circleColor = idGo8.querySelectorAll('div');

let greenCount = 0;
let redCount = 0;
let blueCount = 0;

let c0 = circleColor[0].style.backgroundColor;
let c1 = circleColor[1].style.backgroundColor;
let c2 = circleColor[2].style.backgroundColor;
let c3 = circleColor[3].style.backgroundColor;
let c4 = circleColor[4].style.backgroundColor;
let c5 = circleColor[5].style.backgroundColor;

// circle 1
if (c0 === 'green') {
    greenCount++;
} else if (c0 === 'red') {
    redCount++;
} else {
    blueCount++;
}

// circle 2
if (c1 === 'green') {
    greenCount++;
} else if (c1 === 'red') {
    redCount++;
} else {
    blueCount++;
}

// circle 3
if (c2 === 'green') {
    greenCount++;
} else if (c2 === 'red') {
    redCount++;
} else {
    blueCount++;
}

// circle 4
if (c3 === 'green') {
    greenCount++;
} else if (c3 === 'red') {
    redCount++;
} else {
    blueCount++;
}

// circle 5
if (c4 === 'green') {
    greenCount++;
} else if (c4 === 'red') {
    redCount++;
} else {
    blueCount++;
}

// circle 6
if (c5 === 'green') {
    greenCount++;
} else if (c5 === 'red') {
    redCount++;
} else {
    blueCount++;
}


spanColor[0].innerText = greenCount;
spanColor[1].innerText = redCount;
spanColor[2].innerText = blueCount;

//---------------------------------------------------------------------------------------
//Task #9
const idGo9 = document.querySelector('#go9');
const span9 = idGo9.querySelectorAll('span');

// Multiplication #1
const num1 = span9[0].innerText;
const num2 = span9[1].innerText;

const result1 = num1 * num2;

span9[2].innerText = result1;


// Multiplication #2
const num3 = span9[3].innerText;
const num4 = span9[4].innerText;

const result2 = num3 * num4;

span9[5].innerText = result2;


// Multiplication #3
const num5 = span9[6].innerText;
const num6 = span9[7].innerText;

const result3 = num5 * num6;

span9[8].innerText = result3;


// Multiplication #4
const num7 = span9[9].innerText;
const num8 = span9[10].innerText;

const result4 = num7 * num8;

span9[11].innerText = result4;


// Multiplication #5
const num9 = span9[12].innerText;
const num10 = span9[13].innerText;

const result5 = num9 * num10;

span9[14].innerText = result5;


//---------------------------------------------------------------------------------------
//Task #10
const idGo10 = document.querySelector('#go10');
const div10 = idGo10.querySelectorAll('div');


let w1 = parseInt(div10[0].style.width);
let h1 = parseInt(div10[0].style.height);

let w2 = parseInt(div10[1].style.width);
let h2 = parseInt(div10[1].style.height);

let w3 = parseInt(div10[2].style.width);
let h3 = parseInt(div10[2].style.height);

let w4 = parseInt(div10[3].style.width);
let h4 = parseInt(div10[3].style.height);

let w5 = parseInt(div10[4].style.width);
let h5 = parseInt(div10[4].style.height);

// Shape #1
if (w1 * h1 > 10000) {
    div10[0].style.backgroundColor = 'crimson';
    div10[0].style.color = 'white';
}

// Shape #2
if (w2 * h2 > 10000) {
    div10[1].style.backgroundColor = 'crimson';
    div10[1].style.color = 'white';
}

// Shape #3
if (w3 * h3 > 10000) {
    div10[2].style.backgroundColor = 'crimson';
    div10[2].style.color = 'white';
}

// Shape #4
if (w4 * h4 > 10000) {
    div10[3].style.backgroundColor = 'crimson';
    div10[3].style.color = 'white';
}

// Shape #5
if (w5 * h5 > 10000) {
    div10[4].style.backgroundColor = 'crimson';
    div10[4].style.color = 'white';
}

div10[0].innerText = ('Plotas'+ ' ' + w1 * h1 + ' ' + 'px');
div10[0].style.display = 'flex';
div10[0].style.alignItems = 'center';
div10[0].style.justifyContent = 'center';

div10[1].innerText = ('Plotas'+ ' ' + w2 * h2 + ' ' + 'px');
div10[1].style.display = 'flex';
div10[1].style.alignItems = 'center';
div10[1].style.justifyContent = 'center';

div10[2].innerText = ('Plotas'+ ' ' + w3 * h3 + ' ' + 'px');
div10[2].style.display = 'flex';
div10[2].style.alignItems = 'center';
div10[2].style.justifyContent = 'center';

div10[3].innerText = ('Plotas'+ ' ' + w4 * h4 + ' ' + 'px');
div10[3].style.display = 'flex';
div10[3].style.alignItems = 'center';
div10[3].style.justifyContent = 'center';

div10[4].innerText = ('Plotas'+ ' ' + w5 * h5 + ' ' + 'px');
div10[4].style.display = 'flex';
div10[4].style.alignItems = 'center';
div10[4].style.justifyContent = 'center';

//---------------------------------------------------------------------------------------
