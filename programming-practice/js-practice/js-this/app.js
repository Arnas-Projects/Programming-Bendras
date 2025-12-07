


// Čia 'out of context', tik pasižiūrėjau kaip veikia 'this' drakonas
const Beaver = {
    name: 'Bebras',
    age: 12,
    greet: function () {
        console.log(`Hello, Mr. Anderson, this is ${this.name}, I'm ${this.age} years old, I've been waiting for you`);
    }
};

Beaver.greet();

// --------------------------------------------------------------------------------------------------------------------
// console.log('\n');

// const SpecOps = {
//     name: 'Conrad',
//     location: 'Dubai',
//     status: false,
//     greet: function () {
//         if (SpecOps.status == false) {
//             console.log (`My name's ${this.name}. Evacuation of ${this.location} is a failure.
// You were never meant to come here. You needed someone to blame so you cast it on me - a deadman.`)
//         } else {
//             console.log (`My name's ${this.name}. Evacuation of ${this.location} was a success.
// All is good. We go home.`);
//         }
//     }
// };

// SpecOps.greet();



console.log('\n');

const SpecOps = {
    name: 'Conrad',
    location: 'Dubai',
    status: false,
    greet: function () {
        console.log(`My name's ${this.name}. Evacuation of ${this.location} is a`)
        if (this.status == false) {
            console.log(`failure. You were never meant to come here. 
You needed someone to blame so you cast it on me - a deadman.`);
        } else {
            console.log(`success. We are going home`);
        }
    }
}

SpecOps.greet();

// --------------------------------------------------------------------------------------------------------------------
console.log('\n');


const Soldier = {
    name: 'John',
    rank: 'Sergeant',
    alive: true,
    report: function () {
        console.log (`${this.rank} ${this.name} is`)
        if (this.alive == true) {
            console.log('alive');
        } else {
            console.log('KIA');
        }
    }
};

Soldier.report();

// --------------------------------------------------------------------------------------------------------------------
console.log('\n');

const Soldier2 = {
    name: 'Kurtz',
    rank: 'Colonel',
    alive: true,
    report: function () {
        console.log (`${this.rank} ${this.name} is ${this.alive == true ? 'alive' : 'KIA'}`)
    }
};

Soldier2.report();








































