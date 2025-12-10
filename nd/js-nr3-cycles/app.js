

// random funkcija
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// atsitiktinės spalvos funkcija
function randColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

let saugiklis = 500;


// Task # 1 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #1');

const container = document.querySelector('section.task1-section > div.h1-div');

container.style.display = 'flex';

for (let i = 0; i < 14; i++) {

    const h1 = document.createElement('h1');
    h1.innerText = 4;
    container.appendChild(h1);
};

for (let i = 0; i < 14; i++) {

    const h4 = document.createElement('h4');
    h4.innerText = 1;
    container.appendChild(h4);
};



// Task # 2 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #2');

const container2 = document.querySelector('div.task2-div');


for (let i = 0; i < 44; i++) {

    const randomNum = rand(14, 44);
    const spanas = document.createElement('span');
    spanas.innerText = randomNum + ' ';
    container2.appendChild(spanas);

    if (randomNum % 4 == 0) {
        spanas.style.color = 'crimson';
    } else {
        spanas.style.color = 'cornflowerblue';
    }

    saugiklis--;
    if (!saugiklis) {
        console.log('Saugiklis suveikė');
        break;
    }
}


// Task # 3 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #3');

const section3 = document.querySelector('section.task3-section');


for (let i = 1; i <= 14; i++) {

    let divText = 'Divukas ' + i;
    const divas3 = document.createElement('div');
    divas3.classList.add('task3-div');
    divas3.innerText = divText;
    section3.appendChild(divas3);
}


// Task # 4 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #4');

const section4 = document.querySelector('section.task4-sect');

for (let i = 1; i <= 14; i++) {

    const divas4 = document.createElement('div');
    let divText = 'Divas ' + i;
    divas4.innerText = divText;
    section4.appendChild(divas4);

    if (i % 2 == 0) {
        divas4.classList.add('task4-red')
        divas4.innerText = divText + '\nšitas red';
    } else {
        divas4.classList.add('task4-blue');
        divas4.innerText = divText + '\nšitas blue';
    }
}



// Task # 5 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #5');

const divNum1 = document.querySelector('div.span1-div');
const divOperator = document.querySelector('div.span2-div');
const divNum2 = document.querySelector('div.span3-div');
const divEqual = document.querySelector('div.span4-div');
const divRes = document.querySelector('div.span5-div');


for (let i = 4; i <= 14; i++) {

    const span1 = document.createElement('span');
    divNum1.appendChild(span1);
    span1.innerText = 4;

    const span2 = document.createElement('span');
    divOperator.appendChild(span2);
    span2.innerText = 'x';

    const span3 = document.createElement('span');
    divNum2.appendChild(span3);
    span3.innerText = i;

    const span4 = document.createElement('span');
    divEqual.appendChild(span4);
    span4.innerText = '='; 

    const span5 = document.createElement('span');
    divRes.appendChild(span5);
    let res = 4 * i;
    span5.innerText = res;
}



// Task # 6 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #6');



// Task # 7 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #7');

const section7 = document.querySelector('section.task7-sect');
let size = 400;

for (i = 0; i < 14; i++) {
    
    const div1 = document.createElement('div');
    div1.classList.add('task7-div');
    div1.style.width = size + 'px';
    div1.style.height = size + 'px';
    div1.style.margin = '25px';
    div1.style.backgroundColor = randColor();
    div1.style.position = 'absolute';
    div1.style.top = '20px';
    div1.style.left = '300px';
    div1.style.transform = 'translate(-20%, -20%)';
    section7.appendChild(div1);
    size -= 25;
}



// Task # 8 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #8');

const section8 = document.querySelector('section.task8-sect');

for (let i = 0; i < 41; i++) {

    const symbolRow = document.createElement('div');
    let rowText = '';
    symbolRow.classList.add('task8-div1');
    section8.appendChild(symbolRow);

    for (let i2 = 0; i2 < 41; i2++) {
        rowText += '&#9632;';
        symbolRow.innerHTML = rowText;
    }
}


// Task # 9 ---------------------------------------------------------------------------------------------------------
console.log('\nTask #9');

// const section9 = document.querySelector('section.task9-sect');

// for (let i = 0; i < 41; i++) {

//     const columnDiv = document.querySelector('div');
//     columnDiv.classList.add('.task9-div');
//     section9.appendChild(columnDiv);

//     for (let i2 = 0; i2 < 41; i2++) {
//         const spanCell = document.querySelector('span');
//         spanCell.classList.add('#task9-span');
//         spanCell.innerHTML = '&#9632;';

//         if (i === i2) {
//             spanCell.style.color = 'yellow';
//         }

//         if (i + i2 == 40) {
//             spanCell.style.color = 'yellow';
//         }

//         columnDiv.appendChild(spanCell);
//     }
// }






// for (let i = 0; i < word3.length; i++) {
//     const divas = document.createElement('div'); // sukuriam kiekvienai raidei divą
//     divas.innerText = word3[i]; // pridedam į tą divą raidę
//     h2Cycle.appendChild(divas); // divą su raide įkeliam į h2 tagą
// }









































