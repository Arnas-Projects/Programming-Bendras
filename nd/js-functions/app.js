


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



//TASK # 1 -------------------------------------------------------------------------------------------------------------
console.log('TASK #1');

const zveriukas = () => {
    const random = rand(1, 3)
    if (random == 1) {
        return 'Bebras';
    } else if (random == 2) {
        return 'Barsukas';
    }
    return 'Briedis';
}

const randomAnimal = zveriukas();

console.log(randomAnimal);

//TASK #2 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #2');

const heading2 = document.querySelector('h2.task2-heading2');
heading2.innerText = `Task #2 Press the button see what happens`

const mygtukas1 = document.querySelector('button.task-2-btn');
const h2Task2 = document.querySelector('h2.task-2-h2');
h2Task2.style.marginLeft = '80px';

mygtukas1.addEventListener('click', function () {
    const animalSummon = zveriukas();
    h2Task2.innerText = animalSummon;
});

//TASK #3 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #3');

const lettersReturn = function (word) {
    if (word.length >= 3) {
        return `First letter: ${word[0]},\nSecond letter: ${word[1]},\nThird letter: ${word[2]}`;
    }
    return word;
}

console.log(lettersReturn('Barsukas'));

// Alternative solution

// const lettersReturn = function(word) {
//     if (word.length >= 3) {
//         return word[0] + word[1] + word[2];
//     }
//     return word;
// }


//TASK #4 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #4');

const middleLetter = function (zodis) {
    if (zodis.length % 2 != 0) {
        const middleIndex = (zodis.length - 1) / 2;
        return zodis[middleIndex];
    }
    return 'Simbolių skaičius lyginis';
}

console.log(middleLetter('Briedis'));
console.log(middleLetter('Akvaparkas'));


//TASK #5 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #5');

const funkcija1 = function (num1, num2, symbolStr) {

    if (symbolStr == '+') {
        return num1 + num2;
    } else if (symbolStr == '-') {
        return num1 - num2;
    } else if (symbolStr == '*') {
        return num1 * num2;
    } else if (symbolStr == '/') {
        return num1 / num2;
    }

}

console.log(funkcija1(7, 11, '+'));
console.log(funkcija1(3, 9, '-'));
console.log(funkcija1(3, 5, '*'));
console.log(funkcija1(100, 25, '/'));




//TASK #6 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #6');

const mathFunction = function (num1, num2) {

    return {
        pirmas: num1,
        antras: num2,
        suma: num1 + num2,
        sandauga: num1 * num2,
    }

}

console.log(mathFunction(10, 5));


//TASK #7 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #7');


const divukasTask7 = document.querySelector('div.task7-square-div');

divukasTask7.addEventListener('click', function () {
    if (divukasTask7.innerText % 2) {
        divukasTask7.innerText++;
        divukasTask7.style.border = '4px solid dodgerblue';
        divukasTask7.style.backgroundColor = '#1e8fffb0';
    } else {
        divukasTask7.innerText++;
        divukasTask7.style.border = '4px solid crimson';
        divukasTask7.style.backgroundColor = '#dc143cb0';
    }
});


// ALTERNATIVE SOLUTION

// let isBlue = false;

// divukasTask7.addEventListener('click', function () {
//     if (isBlue) {
//         divukasTask7.style.border = '4px solid dodgerblue';
//         divukasTask7.style.backgroundColor = '#1e8fffb0';
//     } else {
//         divukasTask7.style.border = '4px solid crimson';
//         divukasTask7.style.backgroundColor = '#dc143cb0';
//     }

//     isBlue = !isBlue;
// });


//TASK #8 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #8');

const buttonTask8 = document.querySelector('button.task8-btn');

buttonTask8.addEventListener('click', function () {
    if (buttonTask8.innerText < 25) {
        buttonTask8.innerText++;
        console.log('Button pressed');
        if (buttonTask8.innerText == 25) {
            console.log('STOP');
        }
    } else {
        buttonTask8.innerText;
    }
});


//TASK #9 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #9');

const mygtukasTask9 = document.querySelector('button.task9-btn');
const h2Task9 = document.querySelector('h2.task9-h2');

h2Task9.style.color;

const theySeeMeRollin = function () {
    h2Task9.innerText = rand(1, 6);
    let h2Random = h2Task9.innerText;

    if (h2Random == 6) {
        h2Task9.style.color = 'crimson';
        mygtukasTask9.removeEventListener('click', theySeeMeRollin);
    }
};

mygtukasTask9.addEventListener('click', theySeeMeRollin);


//TASK #10 -------------------------------------------------------------------------------------------------------------
console.log('\nTask #10');

const input1 = document.querySelector('div#task10-div > input.digit1');
const input2 = document.querySelector('div#task10-div > input.digit2');

const operator = document.querySelector('div#task10-div > select');
// const selectAdd = document.querySelector('#numbers-task10 > option');
// const selectMinus = document.querySelector('#numbers-task10 > option + option');
// const selectMultiply = document.querySelector('#numbers-task10 > option + option + option');
// const selectDivide = document.querySelector('#numbers-task10 > option + option + option + option');

const output1 = document.querySelector('div#task10-div > output');
const buttonTask10 = document.querySelector('#task10-div > button.task10-btn');



const funkcija2 = function (num1, num2, symbolStr) {

    if (symbolStr == 'addition') {
        return num1 + num2;
    } else if (symbolStr == 'subtraction') {
        return num1 - num2;
    } else if (symbolStr == 'multiplication') {
        return num1 * num2;
    } else if (symbolStr == 'division') {
        return num1 / num2;
    }
}

buttonTask10.addEventListener('click', function () {

    const number1 = parseFloat(input1.value);
    const number2 = parseFloat(input2.value);
    const operatorius = operator.value;

    const result = funkcija2(number1, number2, operatorius);

    output1.innerText = result;

});
























