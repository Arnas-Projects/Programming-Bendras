


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



// Task #1 ----------------------------------------------------------------------------------------------------
console.log('\nTask #1');

const dice1 = rand(1, 6);
const dice2 = rand(1, 6);

const rez1 = dice1 + dice2

if (rez1 > 8) {
    console.log(rez1, 'Win!');
} else {
    console.log(rez1, 'Lost!');
}

// Task #2 ----------------------------------------------------------------------------------------------------
console.log('\nTask #2');

const katinas1 = {
    vardas: 'Pilkis',
    svoris: rand(3, 6),
}

const katinas2 = {
    vardas: 'Murklys',
    svoris: rand(3, 6),
}

if (katinas1.svoris > katinas2.svoris) {
    console.log (katinas1.vardas, katinas1.svoris, katinas2.vardas, katinas2.svoris, 'Murklys lengvesnis');
} else if (katinas1.svoris < katinas2.svoris) {
    console.log (katinas1.vardas, katinas1.svoris, katinas2.vardas, katinas2.svoris, 'Pilkis lengvesnis');
} else if (katinas1.svoris === katinas2.svoris) {
    console.log (katinas1.vardas, katinas1.svoris, katinas2.vardas, katinas2.svoris, 'Svoriai vienodi');
}


// Task #3 ----------------------------------------------------------------------------------------------------
console.log('\nTask #3');

const Nojus = {
    valtisKatinams: 15,
    valtisKarvems: 15,
}

const cats = rand(0, 30);
const cows = rand(0, 30);

if (cats > 15 && cows > 15) {
    console.log('Katės:', cats, 'Karvės:', cows, 'Katės ir karvės NETELPA');
} else {
    console.log('Katės:', cats, 'Karvės:', cows, 'Katės ir karvės TELPA');
}

// Task #4 ----------------------------------------------------------------------------------------------------
console.log('\nTask #4');

const dice3 = rand(1, 6);

if (dice3 == 1 || dice3 == 5) {
    console.log(dice3, 'Antanas perka TV');
} else if (dice3 == 3 || dice3 == 4) {
    console.log(dice3, 'Antanas perka SKALBYKLĘ');
} else {
    console.log(dice3, 'ŠALDYTUVĄ');
}


// Task #5 ----------------------------------------------------------------------------------------------------
console.log('\nTask #5');


const k1 = rand(1, 7);
const k2 = rand(1, 7);
const k3 = rand(1, 7);

let small;
let medium;
let big;

if (k1 <= k2 && k1 <= k3) {
    small = k1;
    if (k2 < k3) {
        medium = k2;
        big = k3;
    } else {
        medium = k3;
        big = k2;
    }
} else if (k2 <= k1 && k2 <= k3) {
    small = k2;
    if (k1 < k3) {
        medium = k1;
        big = k3;
    } else {
        medium = k3;
        big = k1;
    }
} else if (k3 <= k1 && k3 <= k2) {
    small = k3;
    if (k1 < k2) {
        medium = k1;
        big = k2;
    } else {
        medium = k2;
        big = k1;
    }
}

console.log('Neišrūšiuoti skaičiai:', k1, k2, k3);
console.log('Išrūšiuoti skaičiai:', small, medium, big);













































































































































