


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

const UlTask1 = document.querySelector('ul');

for (let i = 0; i < 9; i++) {

    const list = document.createElement('li');
    list.innerText = A[i];
    UlTask1.appendChild(list);
}


// Task 2 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais 
// gyvūnais išdėliotais abėcėline tvarka.

console.log('\nTask 2');





































































































