


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];



// Task 1 ------------------------------------------------------------------------------------------------------
/* 
    Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).
*/
console.log('\nTask 1');

bitGirls.unshift('Nausėda');

console.log(bitGirls);


// Task 2 ------------------------------------------------------------------------------------------------------
/*
    Sukurkite naują masyvą bitCats Pagrindu paimkite masyvą cats. 
    Naujasis masyvas turėtų turėti elementus iš mažų, dviejų narių, 
    masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - 
    atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.
*/
console.log('\nTask 2');

const bitCats = [];


cats.forEach(oneCat => {

    const catInfo = [];
    catInfo.push(oneCat);
    bitCats.push(catInfo);

    const weight = rand(0, 1);

    if (weight == 0) {
        catInfo.push('Storas');
    } else {
        catInfo.push('Normalus');
    }
});

console.log(bitCats);


// Task 3 ------------------------------------------------------------------------------------------------------
/* 
    bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.
*/
console.log('\nTask 3');


const allCatsByWeight = bitCats.reduce((svoris, cat) => {

    if (cat[1] == 'Storas') {
        svoris.storas += 1;
    } else {
        svoris.normalus += 1;
    }
    return svoris
}, {
    storas: 0,
    normalus: 0
});

console.log(allCatsByWeight);


// Task 4 ------------------------------------------------------------------------------------------------------
/* 
    Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, 
    abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) Tokiu 
    būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.
*/
console.log('\nTask 4');


const RusiavimasPagalABC = bitCats.toSorted((pirmas, antras) => {
    return pirmas[0][1].localeCompare(antras[0][1]);
});

console.log(RusiavimasPagalABC);



// Task 5 ------------------------------------------------------------------------------------------------------
/* 
    (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, 
    kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. 
    Nausėdai katinuko neduokit (nes neužteks) ir vietoj katinuko Nausėdai 
    priskirkite stringą “Barsukas”.
*/
console.log('\nTask 5');


const happyCats = bitGirls.map((merginosVardas, i) => {
    
    
    // combined.merginosVardas = merginosVardas;
    // combined.katinoVardas = bitCats[0][i];

    const catName = bitCats[i] ? bitCats[i][0] : 'Barsukas';

    // if (merginosVardas === 'Nausėda') {
    //     return [merginosVardas, 'Barsukas'];
    // }

    return [merginosVardas, catName]
});

console.log(happyCats);





// const animalsAged1Year = animals.map(zveriukas => {

//     const PasenesZveris = {};
//     PasenesZveris.name = zveriukas.name;
//     PasenesZveris.age = zveriukas.age + 1;
//     return PasenesZveris;
// });


// const animalsAged1YearA = animals.map(zveriukas => ({ ...zveriukas, age: zveriukas.age + 1 }));





