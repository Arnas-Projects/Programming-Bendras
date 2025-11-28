

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




// Task #1 ---------------------------------------------------------------------------------------------
let h2_1 = document.querySelector('h1');
h2_1.innerText = '1 is good';
h2_1.style.color = 'orange';

let h2_2 = document.querySelector('h2');
h2_2.innerText = '2 is good';
h2_2.style.color = 'green';

let h2_3 = document.querySelector('h3');
h2_3.innerText = '3 is good';
h2_3.style.color = 'red';

let h2_4 = document.querySelector('h4');
h2_4.innerText = '4 is good';
h2_4.style.color = 'lightsalmon';


// Task #2 ---------------------------------------------------------------------------------------------

const squareDiv = document.querySelector('body > div');
squareDiv.innerText = 'Raudonas kvadratas';
squareDiv.style.display = 'inline-flex';
squareDiv.style.justifyContent = 'center';
squareDiv.style.width = '150px';
squareDiv.style.height = '150px';
squareDiv.style.marginRight = '50px';
squareDiv.style.border = '3px solid crimson';
squareDiv.style.backgroundColor = 'red';
squareDiv.style.color = 'white';
squareDiv.style.alignItems = 'center';



const circleDiv =document.querySelector('body > div + div');
circleDiv.innerText = 'Mėlynas apskritimas';
circleDiv.style.display = 'inline-flex';
circleDiv.style.justifyContent = 'center';
circleDiv.style.alignItems = 'center';
circleDiv.style.width = '150px';
circleDiv.style.height = '150px';
circleDiv.style.borderRadius = '50%';
circleDiv.style.border = '3px solid blue';
circleDiv.style.backgroundColor = 'lightblue';
circleDiv.style.color = 'white';


//Task #3 ---------------------------------------------------------------------------------------------


const sectionGo3 = document.querySelector('#go3');
const spanielis = sectionGo3.querySelectorAll('span');

const random1 = rand(0, 4);
const random2 = rand(0, 4);

let didelis;
let maziukas;

if (random1 > random2) {
    didelis = random1;
    maziukas = random2;
} else {
    didelis = random2;
    maziukas = random1;
}

let rezultatas = didelis / maziukas;

if (maziukas === 0) {
    spanielis[2].innerText = 'nepadalinsi is 0';
} else {
    rezultatas = didelis / maziukas;
}

spanielis[0].innerText = didelis;
spanielis[1].innerText = maziukas;
spanielis[2].innerText = rezultatas;


//Task #4 ---------------------------------------------------------------------------------------------

const randomas1 = rand(50, 200);
const randomas2 = rand(50, 200);
const randomas3 = rand(50, 200);

const rutulysDiv = document.querySelectorAll('#go4 div');



let mazas;
let vidutinis;
let didesnis;

if (randomas1 < randomas2 && randomas1 < randomas3) {
    mazas = randomas1;
} else if (randomas1 > randomas2 && randomas1 > randomas3) {
    didesnis = randomas1;
} else {
    vidutinis = randomas1;
}

if (randomas2 < randomas1 && randomas2 < randomas3) {
    mazas = randomas2;
} else if (randomas2 > randomas1 && randomas2 > randomas3) {
    didesnis = randomas2;
} else {
    vidutinis = randomas2;
}

if (randomas3 < randomas1 && randomas3 < randomas2) {
    mazas = randomas3;
} else if (randomas3 > randomas1 && randomas3 > randomas2) {
    didesnis = randomas3;
} else {
    vidutinis = randomas3;
}

rutulysDiv[0].style.border = '3px solid black';
rutulysDiv[0].style.display = 'inline-flex';
rutulysDiv[0].style.justifyContent = 'center';
rutulysDiv[0].style.alignItems = 'center';
rutulysDiv[0].style.margin = '10px';
rutulysDiv[0].style.borderRadius = '50%';
rutulysDiv[0].style.width = mazas + 'px';
rutulysDiv[0].style.height = mazas + 'px';
rutulysDiv[0].innerText = mazas;

rutulysDiv[1].style.border = '3px solid black';
rutulysDiv[1].style.display = 'inline-flex';
rutulysDiv[1].style.justifyContent = 'center';
rutulysDiv[1].style.alignItems = 'center';
rutulysDiv[1].style.margin = '10px';
rutulysDiv[1].style.borderRadius = '50%';
rutulysDiv[1].style.width = vidutinis + 'px';
rutulysDiv[1].style.height = vidutinis + 'px';
rutulysDiv[1].innerText = vidutinis;

rutulysDiv[2].style.border = '3px solid black';
rutulysDiv[2].style.display = 'inline-flex';
rutulysDiv[2].style.justifyContent = 'center';
rutulysDiv[2].style.alignItems = 'center';
rutulysDiv[2].style.margin = '10px';
rutulysDiv[2].style.borderRadius = '50%';
rutulysDiv[2].style.width = didesnis + 'px';
rutulysDiv[2].style.height = didesnis + 'px';
rutulysDiv[2].innerText = didesnis;

//Task #5 ---------------------------------------------------------------------------------------------

const span5 = document.querySelectorAll('#go5 span');

let sk1 = rand(-10, 10);
let sk2 = rand(-10, 10);
let sk3 = rand(-10, 10);



if (sk1 < 0) {
    span5[0].style.color = 'crimson';
} else if (sk1 > 0) {
    span5[0].style.color = 'blue';
} else {
    span5[0].style.color = 'green';
}

if (sk2 < 0) {
    span5[1].style.color = 'crimson';
} else if (sk2 > 0) {
    span5[1].style.color = 'blue';
} else {
    span5[1].style.color = 'green';
}

if (sk3 < 0) {
    span5[2].style.color = 'crimson';
} else if (sk3 > 0) {
    span5[2].style.color = 'blue';
} else {
    span5[2].style.color = 'green';
}


span5[0].innerText = sk1;
span5[1].innerText = sk2;
span5[2].innerText = sk3;

//Task #6 ---------------------------------------------------------------------------------------------

const kiekisSpan = document.querySelector('#go6 > p[data-amount] > span');
const kainaSpan = document.querySelector('#go6 > p[data-subtotal] > span');
const nuolaidaSpan = document.querySelector('#go6 > p[data-discount] > span');
const sumaSpan = document.querySelector('#go6 > p[data-total] > span');

const zvakes = rand(5, 3000);

kiekisSpan.innerText = zvakes;
kainaSpan.innerText = zvakes;

let nuolaida;
let suma;

if (zvakes > 2000) {
    nuolaida = 4;
    suma = zvakes - (zvakes / 100 * nuolaida);
} else if (zvakes > 1000) {
    nuolaida = 3;
    suma = zvakes - (zvakes / 100 * nuolaida);
} else {
    nuolaida = 0;
    suma = zvakes;
}

nuolaidaSpan.innerText = nuolaida;
sumaSpan.innerText = suma.toFixed(2);

//Task #7 ---------------------------------------------------------------------------------------------

const figuraDiv = document.querySelector('#go7 div');

const figura = rand(0, 2);

if (figura === 0) {
    figuraDiv.style.margin = '15px';
    figuraDiv.style.display = 'inline-flex';
    figuraDiv.style.width = '200px';
    figuraDiv.style.height = '200px';
    figuraDiv.style.border = '3px solid black';
    figuraDiv.style.backgroundColor = 'gray';
} else if (figura === 1) {
    figuraDiv.style.margin = '15px';
    figuraDiv.style.display = 'inline-flex';
    figuraDiv.style.width = '200px';
    figuraDiv.style.height = '200px';
    figuraDiv.style.border = '3px solid black';
    figuraDiv.style.borderRadius = '50%';
    figuraDiv.style.backgroundColor = 'gray';
} else {
    figuraDiv.style.margin = '15px';
    figuraDiv.style.display = 'inline-flex';
    figuraDiv.style.width = '0';
    figuraDiv.style.height = '0';
    figuraDiv.style.borderLeft = '150px solid transparent';
    figuraDiv.style.borderRight = '150px solid transparent';
    figuraDiv.style.borderBottom = '250px solid #00000070';
}


//Task #8 ---------------------------------------------------------------------------------------------

const resultDiv = document.querySelectorAll('#go8 div[data-result] > p > span');
const divData = document.querySelectorAll('#go8 div');

// divData.style.backgroundColor = '';

let greenDiv = 0;
let redDiv = 0;
let blueDiv = 0;

let d1 = divData[0].style.backgroundColor;
let d2 = divData[1].style.backgroundColor;
let d3 = divData[2].style.backgroundColor;
let d4 = divData[3].style.backgroundColor;
let d5 = divData[4].style.backgroundColor;
let d6 = divData[5].style.backgroundColor;

// circle 1
if (d1 === 'green') {
    greenDiv++;
} else if (d1 === 'red') {
    redDiv++;
} else {
    blueDiv++;
}


//circle2
if(d2 === 'green') {
    greenDiv++;
} else if (d2 === 'red') {
    redDiv++;
} else {
    blueDiv++;
}

if (d3 === 'green') {
    greenDiv++;
} else if (d3 === 'red') {
    redDiv++;
} else {
    blueDiv++;
}

if (d4 === 'green') {
    greenDiv++;
} else if (d4 === 'red') {
    redDiv++;
} else {
    blueDiv++;
}

if (d5 === 'green') {
    greenDiv++;
} else if (d5 === 'red') {
    redDiv++;
} else {
    blueDiv++;
}

if (d6 === 'green') {
    greenDiv++;
} else if (d6 === 'red') {
    redDiv++;
} else {
    blueDiv++;
}


resultDiv[0].innerText = greenDiv;
resultDiv[1].innerText = redDiv;
resultDiv[2].innerText = blueDiv;


//Task #9 ---------------------------------------------------------------------------------------------

const intData = document.querySelectorAll('#go9 div > span');

let result1 = intData[0].innerText * intData[1].innerText;
let result2 = intData[3].innerText * intData[4].innerText;
let result3 = intData[6].innerText * intData[7].innerText;
let result4 = intData[9].innerText * intData[10].innerText;
let result5 = intData[12].innerText * intData[13].innerText;

intData[2].innerText = result1;
intData[5].innerText = result2;
intData[8].innerText = result3;
intData[11].innerText = result4;
intData[14].innerText = result5;


//Task #10 ---------------------------------------------------------------------------------------------

let areaData = document.querySelectorAll('#go10 div');



let W = areaData[0].style.width;
let H = areaData[0].style.height;
let wInt = parseInt(W);
let hInt = parseInt(H);

let W1 = areaData[1].style.width;
let H1 = areaData[1].style.height;
let wInt1 = parseInt(W1);
let hInt1 = parseInt(H1);

let W2 = areaData[2].style.width;
let H2 = areaData[2].style.height;
let wInt2 = parseInt(W2);
let hInt2 = parseInt(H2);

let W3 = areaData[3].style.width;
let H3 = areaData[3].style.height;
let wInt3 = parseInt(W3);
let hInt3 = parseInt(H3);

let W4 = areaData[4].style.width;
let H4 = areaData[4].style.height;
let wInt4 = parseInt(W4);
let hInt4 = parseInt(H4);

// #1
if (wInt * hInt > 10000) {
    areaData[0].style.backgroundColor = 'crimson';
    areaData[0].style.color = 'white';
    areaData[0].innerText = wInt * hInt;
} else {
    areaData[0].style.color = 'black';
    areaData[0].innerText = wInt * hInt;
}


// #2
if (wInt1 * hInt1 > 10000) {
    areaData[1].style.backgroundColor = 'crimson';
    areaData[1].style.color = 'white';
    areaData[1].innerText = wInt1 * hInt1;
} else {
    areaData[1].style.color = 'black';
    areaData[1].innerText = wInt1 * hInt1;
}



// #3
if (wInt2 * hInt2 > 10000) {
    areaData[2].style.backgroundColor = 'crimson';
    areaData[2].style.color = 'white';
    areaData[2].innerText = wInt2 * hInt2;
} else {
    areaData[2].style.color = 'black';
    areaData[2].innerText = wInt2 * hInt2;
}



// #4
if (wInt3 * hInt3 > 10000) {
    areaData[3].style.backgroundColor = 'crimson';
    areaData[3].style.color = 'white';
    areaData[3].innerText = wInt3 * hInt3;
} else {
    areaData[3].style.color = 'black';
    areaData[3].innerText = wInt3 * hInt3;
}



// #5
if (wInt4 * hInt4 > 10000) {
    areaData[4].style.backgroundColor = 'crimson';
    areaData[4].style.color = 'white';
    areaData[4].innerText = wInt4 * hInt4;
} else {
    areaData[4].style.color = 'black';
    areaData[4].innerText = wInt4 * hInt4;
}
