


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



//TASK # 1 ---------------------------------------------------------------
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

//TASK #2 ---------------------------------------------------------------
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

//TASK #3 ---------------------------------------------------------------
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


//TASK #4 ---------------------------------------------------------------
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


//TASK #5 ---------------------------------------------------------------
// console.log('\nTask #5');

// const funkcija1 = function (num1, num2, symbolStr) {

// }


//TASK #8 ---------------------------------------------------------------
console.log('\nTask #8');

const buttonTask8 = document.querySelector('button.task8-btn');

buttonTask8.addEventListener('click', function () {
    buttonTask8.innerText++;
    console.log('Button pressed');
});


//TASK #9 ---------------------------------------------------------------
console.log('\nTask #9');




















