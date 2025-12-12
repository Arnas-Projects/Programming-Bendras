


// fetch('https://in3.dev/inv/') // siunčia užklausa
//     .then(res => res.json()) // laukiam tada JSON gautą rezultatą
//     .then(inv => console.log(inv)); // kai yra JSON tada loginam



const invoiceJson = `{
    "number": "AB-53736408",
    "date": "2025-11-27",
    "due_date": "2025-12-08",
    "company": {
        "buyer": {
            "name": "UAB Kazlauskas ir Urbonas",
            "address": "Laisvės gatvė 79-73, Telšiai",
            "code": "19271836",
            "vat": "LT601046378",
            "phone": "863848197",
            "email": "nina68@gedminas.lt"
        },
        "seller": {
            "name": "UAB Jankauskas ir Kavaliauskas",
            "address": "Žalgirio g. 44, Jonava LT-43157",
            "code": "96103682",
            "vat": "LT711569442",
            "phone": "+37066376540",
            "email": "vasiliauskiene.sigita@osmundas.lt"
        }
    },
    "items": [
        {
            "description": "Komoda su papildoma lentyna",
            "quantity": 1,
            "price": 330,
            "discount": []
        },
        {
            "description": "Kampinė odinė sofa Ganykla su patalynės dėže",
            "quantity": 2,
            "price": 660,
            "discount": []
        },
        {
            "description": "Sulakstoma ąžuolinė kėdė Barbaras su uždengimu",
            "quantity": 1,
            "price": 90.5,
            "discount": []
        },
        {
            "description": "Komoda žalia su 4 stalčiais",
            "quantity": 6,
            "price": 240,
            "discount": []
        },
        {
            "description": "Kėdė Violeta su uždengimu",
            "quantity": 2,
            "price": 60.97,
            "discount": []
        }
    ],
    "shippingPrice": 48.5
}`;


const invoice = JSON.parse(invoiceJson);

console.log(invoice);

console.log('\n');

// Arrays Part 5 ----------------------------------------------------------------------------------------------------


const animals = [
    {
        name: 'Briedis',
        age: 54,
        fur: true
    },
    {
        name: 'Lapė',
        age: 12,
        fur: true
    },
    {
        name: 'Vilkas',
        age: 8,
        fur: true
    },
    {
        name: 'Kiškis',
        age: 4,
        fur: true
    },
    {
        name: 'Erelis',
        age: 16,
        fur: false
    },
    {
        name: 'Voverė',
        age: 3,
        fur: true
    }
];


// 1. forEach --- Pačiupinėjam visus elementus iš eilės ===> forEach


animals.forEach(zveris => {
    console.log(zveris.name);
});



// 2. MAP --- Sukuriam patobulintą masyvą iš seno masyvo ===> map



const PaseneZverys = animals.map(zveris => {
    return { ...zveris, age: zveris.age + 1 };  // ...zveris - yra kopija seno objekto, age : užrašome ant viršaus naują age
});

console.log(PaseneZverys);


// 3. FIND --- Surandame masyve tai, kas mus domina ===> find

const wolf = animals.find(zveriukas => {
    if (zveriukas.name == 'Vilkas') {
        return true;  // paieška nutraukta, objektas su vilku rastas
    }
    return false;  // paieška eina prie sekančio objekto
});

console.log(wolf);

// let suma = 0;


// 4. REDUCE --- Suskaičiuojame kažką masyve ===> reduce

// 1-as variantas ===> forEach

// animals.forEach(zveriukas => {
//     suma = suma + zveriukas.age;
//     //arba: suma += zveriukas.age;
// });

// console.log(suma);

// 2-as variantas ===> reduce
const allAges = animals.reduce((suma, zveriuks) => {
    return suma + zveriuks.age; // įrašo naują 'suma' reikšmę
}, 0); // 0 - pradinė 'suma' reikšmė nuo kurios pradedame skaičiuot. Panašiai, kaip let suma = 0;

console.log(allAges);


// 5. FILTER --- Naujo išfiltruoto masyvo sudarymas ===> filter

const YoungAnimals = animals.filter(zveris => {
    if (zveris.age <= 10) {
        return true;  // jei tinka, pridedam prie išfiltruoto masyvo
    } else {
        return false;  // jei netinka, nededam
    }
});

console.log(YoungAnimals);


// 6. toSorted --- Naujo, surūšiuoto masyvo sudarymas ===> toSorted

// 1-as variantas ---> paprastesnis, lengvesnis
// console.log('\ntoSorted rūšiavimas');

const SortedByAge = animals.toSorted((pirmas, antras) => {
    return pirmas.age - antras.name; // jeigu 'pirmas' > 'antras' - grąžins teigiamą skaičių, jeigu 'pirmas' < 'antras' - grąžins neigiamą
});

// console.log(SortedByAge);



//2-as variantas ---> truputį sudėtingesnis
console.log('\ntoSorted rūšiavimas su if');

const SortedByAge2 = animals.toSorted((a, b) => {
    if (a.age > b.age) {
        return -1;   // sukeičiam vietomis skaičius ir turime rūšiavimą iš priešingos pusės
    }
    if (a.age < b.age) {
        return 1;  // sukeičiam vietomis skaičius ir turime rūšiavimą iš priešingos pusės
    }
    return 0;
});

console.log(SortedByAge, SortedByAge2);



// 3-as variantas ---> Rūšiavimas pagal abėcėlę
console.log('\n sort by name');

const SortedByABC = animals.toSorted((pirmas, antras) => {
    return pirmas.name.localeCompare(antras.name); // jeigu 'pirmas' > 'antras' - grąžins teigiamą skaičių, jeigu 'pirmas' < 'antras' - grąžins neigiamą
});

console.log(SortedByABC);


animals.push(

    {
        name: 'Žąsis',
        age: 2
    },
    {
        name: 'Zebras',
        age: 12
    },
    {
        name: 'Šarka',
        age: 6
    },
    {
        name: 'Silkė',
        age: 12
    }
);


// RŪŠIAVIMAS PAGAL VARDĄ
console.log('\nsort by name 1');

// 1-as variantas - trumpesnis, lengvesnis
const ByName = animals.toSorted((a, b) => {
    return a.name.localeCompare(b.name, "lt");
});

console.log(ByName);



console.log('\nsort by name 2 - su if');

// 2-as variantas - ilgesnis, su if
const ByName2 = animals.toSorted((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log(ByName, ByName2);


// sortina patį animals (originalų) masyvą

animals.sort((a, b) => {
    return a.name.localeCompare(b.name, "lt");
});


console.log('\n\n Ciklas - SWITCH');


const pack = 'L'  // S, M, L, XL


// if formuluotė (be SWITCH) ====> Paštomato tikrinimo pavyzdys
console.log('\n\n if formuluotė');

if (pack == 'S') {
    console.log('S');
}
if (pack == 'S' || pack == 'M') {
    console.log('M');
}
if (pack == 'S' || pack == 'M' || pack == 'L') {
    console.log('L');
}
console.log('XL');



// SWITCH formuluotė:
console.log('\n SWITCH formuluotė');

switch(pack) {
    case 'S': console.log('S');
    case 'M': console.log('M');
    case 'L': console.log('L');
    default: console.log('XL');
}


if (pack == 'S') {
    console.log('Mažas');
} else if (pack == 'M') {
    console.log('Vidutinis');
} else if (pack == 'L') {
    console.log ('Didelis');
} else if (pack == 'XL') {
    console.log('Labai didelis');
};



// SWITCH modified:
console.log('\n SWITCH modified');

switch(pack) {
    case 'S': 
        console.log('Mažas');
        break;
    case 'M': 
        console.log('Vidutinis');
        break;
    case 'L': 
        console.log('Didelis');
        break;
    case 'XL': // vietoj default 
        console.log('Labai didelis');
};






















