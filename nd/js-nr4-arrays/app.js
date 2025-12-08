


// Task 1 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

console.log('Task 1');

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const UlTask1 = document.querySelector('ul.task1-ul');

// 1-as variantas ---> naudojant for ciklą

// for (let i = 0; i < 9; i++) {

//     const list = document.createElement('li');
//     list.innerText = A[i];
//     UlTask1.appendChild(list);
// }


// 2-as variantas ---> naudojant forEach metodą

A.forEach(gyvuliukas => {
    const list = document.createElement('li');
    list.innerText = gyvuliukas;
    UlTask1.appendChild(list);
});


// Task 2 -----------------------------------------------------------------------------------------------------

// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais 
// gyvūnais išdėliotais abėcėline tvarka.

console.log('\nTask 2');

// 1 etapas -----------------
const UlTask2 = document.querySelector('ul.task2-ul');

const SortedArrayAByABC = A.toSorted((a, b) => {
    return a.localeCompare(b);
});


// 2 etapas -----------------
SortedArrayAByABC.forEach(gyvunas => {

    const listukas = document.createElement('li');
    listukas.innerText = gyvunas;
    UlTask2.appendChild(listukas);
});



// Task 3 -----------------------------------------------------------------------------------------------------

// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B 
// nuskaitytais gyvūnais išdėliotais abėcėline tvarka 
// (Rūšiavimas turi būti bendras tarp abiejų masyvų, 
// NE kiekvieno atskirai).#pamastykKaip

console.log('\nTask 3');

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];


// 1 etapas -----------------
const CombinedAB = [...A, ...B];

console.log(CombinedAB);


// 2 etapas -----------------
const UlTask3 = document.querySelector('ul.task3-ul');

const CombinedABsorted = CombinedAB.toSorted((a, b) => {
    return a.localeCompare(b);
});

console.log(CombinedABsorted);


// 3 etapas -----------------
CombinedABsorted.forEach(zveriukas => {

    const listukas = document.createElement('li');
    listukas.innerText = zveriukas;
    UlTask3.appendChild(listukas);
});


// Task 4 -----------------------------------------------------------------------------------------------------

// Html faile sukurkite section tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite div tagus, 
// kurie yra mėlyni apskritimai su centre užrašytais 
// iš masyvo A nuskaitytais gyvūnais.

console.log('\nTask 4');

const section4 = document.querySelector('section.task4-sect');


A.forEach(zveriukas => {

    const divas = document.createElement('div');
    divas.innerText = zveriukas;
    divas.classList.add('task4-div')
    section4.appendChild(divas);
});








































































































