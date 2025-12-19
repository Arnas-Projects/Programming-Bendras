


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




const mygtukas = document.querySelector('button.roll');
const diceNumber = document.querySelector('span.dice-value');
const DiceIMG1 = document.querySelector('div.image1');
const DiceIMG2 = document.querySelector('div.image2');


const DiceIMGArray = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;"
];


const LetsRollDice = _ => {

    const dice1 = rand(1, 6);
    const dice2 = rand(1, 6);

    DiceIMG1.innerHTML = DiceIMGArray[dice1 -1];
    DiceIMG2.innerHTML = DiceIMGArray[dice2 -1];


    if (dice1 > dice2) {
        diceNumber.innerText = `
        First Dice: ${dice1}; 
        Second Dice: ${dice2}; 
        First Dice WON!`;
    } else if (dice1 < dice2) {
        diceNumber.innerText = `
        First Dice: ${dice1}; 
        Second Dice: ${dice2}; 
        Second Dice WON!`;
    } else {
        diceNumber.innerText = `
        First Dice: ${dice1}; 
        Second Dice: ${dice2}; 
        DRAW!`;
    }
};

mygtukas.addEventListener('click', LetsRollDice);




// const RollDice = _ => {

//     const dice1 = rand(1, 6);
//     // const dice2 = rand(1, 6);

//     if (dice1 == 1) {
//         diceNumber.innerText = 1;
//         DiceIMG.innerText = "\u2680";
//     } else if (dice1 == 2) {
//         diceNumber.innerText = 2;
//         DiceIMG.innerText = "\u2681";
//     } else if (dice1 == 3) {
//         diceNumber.innerText = 3;
//         DiceIMG.innerText = "\u2682";
//     } else if (dice1 == 4) {
//         diceNumber.innerText = 4;
//         DiceIMG.innerText = "\u2683";
//     } else if (dice1 == 5) {
//         diceNumber.innerText = 5;
//         DiceIMG.innerText = "\u2684";
//     } else {
//         diceNumber.innerText = 6;
//         DiceIMG.innerText = "\u2685";
//     }
// };

// mygtukas.addEventListener('click', RollDice);


// // ------------------------------------------------------------------------

// const btnRoll = document.querySelector(".roll");
 
// const kauliukas = [
//     "&#9856;",
//     "&#9857;",
//     "&#9858;",
//     "&#9859;",
//     "&#9860;",
//     "&#9861;"
// ];
// function jeronimo() {
//     const skaicius = rand(1, 6);
//     document.querySelector(".image").innerHTML = kauliukas[skaicius - 1];
//     document.querySelector("span").innerText = skaicius;
// }

// btnRoll.addEventListener("click", jeronimo);


// //------------------------------------------------------------------------------------------------------

// const diceImage = document.querySelector('.image');
 
// const diceNumber2 = document.querySelector('.diceNumber');
 
// const button = document.querySelector('.roll');
 
// const kauliukas2 = [
//     "&#9856;",  // i = 0 // sk 1
//     "&#9857;",  //  i = 1  // sk 2
//     "&#9858;",  // i = 2
//     "&#9859;",  // i = 3
//     "&#9860;",  // i = 4 // sk 5
//     "&#9861;"  // i = 5  // sk 6
// ];
 
// button.addEventListener('click', rollDice);
 
// function rollDice() {
//     let rollResult = rand(1, 6);
//     console.log(rollResult);
//     diceNumber.innerText = rollResult;
//     diceImage.innerHTML = kauliukas2[rollResult-1];
// }
