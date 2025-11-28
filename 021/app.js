


const animals = [
    {
        name: 'Briedis',
        age: 54
    },
    {
        name: 'Lapė',
        age: 12
    },
    {
        name: 'Vilkas',
        age: 8
    },
    {
        name: 'Kiškis',
        age: 4
    },
    {
        name: 'Erelis',
        age: 16
    },
    {
        name: 'Voverė',
        age: 3
    }
];

console.log(animals);


// ieškom Vilko

let findIndex = -1;

for (let i = 0; i < animals.length; i++) {      
    
    // animals visi 
    // animals[i] konkretus itasis žvėris
    // animals[i].name konkretaus itojo žvėries vardas

    if ('Vilkas' == animals[i].name) {
        findIndex = i;
    }
}

console.log(findIndex);

const pencils = [
    {
        color: 'Raudonas',
        size: 12
    },
    {
        color: 'Mėlynas',
        size: 8
    },
    {
        color: 'Žalias',
        size: 15
    },
    {
        color: 'Geltonas',
        size: 7
    },
    {
        color: 'Juodas',
        size: 10
    },
    {
        color: 'Violetinis',
        size: 9
    },
    {
        color: 'Oranžinis',
        size: 11
    }
];


let rastiPencil = -1;
let maziukas = pencils[0];

for (let i = 0; i < pencils.length; i++) {
    if (pencils[i].size < maziukas.size) {
        maziukas = pencils[i];
    }
}

console.log(maziukas);

let favorite = null; //dar nežinom koks pieštukas, todel joks

for (let i = 0; i < pencils.length; i++) {
    if (null === favorite) {  // jeigu dar neturim favorito, tai favoritu padarom pirma pasitaikiusi piestuka
        favorite = pencils[i];
    } else {
        if (favorite.size > pencils[i].size) {
            favorite = pencils[i];
        }
    }
}

console.log(favorite.color);



/*
let findIndex = -1;

for (let i = 0; i < animals.length; i++) {      

    if ('Vilkas' == animals[i].name) {
        findIndex = i;
    }
}
*/


let line = 0;

for (let i = 0; i < pencils.length; i++) {
    // line = line + pencils[i].size;
    line += pencils[i].size; // niekuo nesiskiria;
}

console.log(line);


let piestukuLinija = 0;

for (let i = 0; i < pencils.length; i++) {
    if (pencils[i].color != 'Geltonas') {   // skip the yellow one
        piestukuLinija += pencils[i].size;
    }
}

console.log(piestukuLinija);

// let piestukuLinija = 0;

// for (let i = 0; i < pencils.length; i++) {
//     if (pencils[i].color == 'Geltonas') {   // skip the yellow one
//         continue; // grįžtame į pradžią
//     }
//     piestukuLinija += pencils[i].size;
// }

// console.log(piestukuLinija);


// Bloga praktika, be skliaustu
if (false) 
    console.log('Taip');
 else 
    console.log('Ne');



const D = false;

D && console.log('Taip');
D || console.log ('Ne');


const oldAnimals = []; // tiems kam virš 10 metų

for (let i = 0; i < animals.length; i++) {
    if (animals[i].age > 10) {
        oldAnimals.push(animals[i]);
    }
};


console.log(oldAnimals);


const pencils2 = [
    {
        color: 'Raudonas',
        size: 12
    },
    {
        color: 'Mėlynas',
        size: 8
    },
    {
        color: 'Žalias',
        size: 15
    },
    {
        color: 'Geltonas',
        size: 7
    },
    {
        color: 'Juodas',
        size: 10
    },
    {
        color: 'Violetinis',
        size: 9
    },
    {
        color: 'Oranžinis',
        size: 11
    },
];

const colected = [];

for (let i = 0; i < pencils2.length; i++) {
    if (pencils2[i].size > 10) {
        colected.push(pencils2[i])
    }
};

console.log(colected);


// Bubble sort pencils by size
for (let i = 0; i < pencils.length - 1; i++) {
    for (let j = 0; j < pencils.length - 1 - i; j++) {
        if (pencils[j].size > pencils[j + 1].size) {
            const temp = pencils[j];
            pencils[j] = pencils[j + 1];
            pencils[j + 1] = temp;
        }
    }
}
 
console.log(pencils);
















