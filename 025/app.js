


// Mergaitė turi 5 spalvotus pieštukus.

let mergaitesPiestukuKiekis = 5; // čia yra ne lygybė, čia yra priskyrimas

console.log(mergaitesPiestukuKiekis);



mergaitesPiestukuKiekis = 7;

console.log(mergaitesPiestukuKiekis);



mergaitesPiestukuKiekis = 9;

console.log(mergaitesPiestukuKiekis);



mergaitesPiestukuKiekis = 25;

console.log(mergaitesPiestukuKiekis);



// Mergaitės vardas Marytė

const mergaitesVardas = 'Marytė';

console.log(mergaitesVardas);



// Berniukas, kurio vardas Tomukas, turi 5 pieštukus

const berniukas = {} // objektas tuščias. O dabar bus galima įdėti į šį objektą savybes

berniukas.piestukuKiekis = 5;
berniukas.vardas = 'Tomukas';

console.log(berniukas);



const kazkas = {}; // tuščias objektas, tarsi tuščias maišas, kur viskas sumesta padrika tvarka


const pietukai = []; // tuščias masyvas, tarsi tuščia spintelė, kur viskas sudėta tvarkingai

// piestukai[0] = 'Raudonas';
// piestukai[1] = 'Geltonas';
// piestukai[2] = 'Žalias';


// 1. Gyveno žvėris - Bebras. Jis turėjo užtvanką ant Neries upės. Užtvankoje buvo sutempta 59 pagaliai
// Bebro uodega buvo ilga 39cm. Bebras turėjo 3 vaikus: 'Bebrius', 'Bebrikė' ir 'Bebroidas'.
// Aprašyti žvėrį

console.log('\nTask #1');

// Cia mano sprendimas
const zveris1 = {
    vardas: 'Bebras',
    pagaliaiUztvankoj: 59,
    uztvankosAdresas: 'ant Neries upės',
    uodegosIlgis: '39cm',
    vaikas1: 'Bebrius',
    vaikas2: 'Bebrikė',
    vaikas3: 'Bebroidas',
}

// Cia destytojo sprendimas
const zveris2 = {}

zveris2.vardas = 'Bebras';
zveris2.uztvankosAdresas = 'ant Neries upės';
zveris2.pagaliuSkaiciusUztvankoj = 59;
zveris2.uodegosIlgis = '39cm';
zveris2.vaikai = [];
zveris2.vaikai[0] = 'Bebrius';
zveris2.vaikai[1] = 'Bebrikė';
zveris2.vaikai[2] = 'Bebroidas';

console.log(zveris1);
console.log(zveris2);


// Cia destytojo sprendimas ==> Dėstytojas, asmeniškai rinktųsi šį, trumpesnį variantą realiame kode

const zveris3 = {
    vardas: 'Bebras',
    uztvankosAdresas: 'ant Neries upės',
    pagaliuSkaiciusUztvankoj: 59,
    uodegasIlgis: '39cm',
    vaikai: ['Bebrius', 'Bebrikė', 'Bebroidas']
}

console.log(zveris3);


// 2. Prekė 'Rašiklių rinkinys'. Prekės kodas: 6548942158789. Kaina: 3.75 Rašiklių spalvos: 'Mėlyna', 'Juoda', 'Raudona'

console.log('\nTask #2');

const product1 = {
    title: 'Rašiklių rinkinys TRYS',
    code: '6548942158789',
    price: 3.75,
    color: ['Mėlyna', 'Juoda', 'Raudona'],
};


const product2 = {
    title: 'Rašiklių rinkinys KETURI',
    code: '5666465135954',
    price: 4.25,
    color: ['Mėlyna', 'Juoda', 'Raudona', 'Geltona'],
};

// Kurio rinkinio vienas rašiklis yra pigesnis?

// if (sąlygos vieta) {
//     TAIP veiksmas
// } else {
//     NE veiksmas
// }


if ((product1.price / product1.color.length) < (product2.price / product2.color.length)) {
    console.log(product1.title);
} else {
    console.log(product2.title);
}



//---------------------------------------------------------------------------------------------------------------
console.log('\nTask #2.1 (su funkcija)');


const getOnePenPrice = product => {
    return product.price / product.color.length;
};

if (getOnePenPrice(product1) < getOnePenPrice(product2)) {
    console.log(product1.title);
} else {
    console.log(product2.title);
};



//---------------------------------------------------------------------------------------------------------------


/*
Naujos statybos name parduodami du butai (analogija product1 ir product2)
 
Butas. numeris: 45; užbaigtumas: "euroremontas", balkonas: nėra, kambariai: virtuvė 10m2,
miegamasis: 15m2, svetainė: 18m2; kaina 75500 Eur
 
Butas. numeris: 12; užbaigtumas: "neįrengtas", balkonas: yra,  kambariai: virtuvė 9m2,
miegamasis: 12m2, svetainė: 20m2, vaikų kambarys: 14m2; kaina 92500 Eur
 
Klausimas pirmas: Kuris butas turi daugiau kambarių?
Klausimas antras: Kurio buto kvadratinis metras yra brangesnis (nesikartojome šito, tiesiog kam
per paprastas pirmas klausimas, kad turėtų ką veikti - tema masyvo metodai)
 
*/
console.log('\nTask #3.1');


const butas1 = {

    numeris: 45,
    uzbaigtumas: 'euroremontas',
    balkonas: false,
    kambariai: [
        { kambarys: 'virtuve', m2: 10 },
        { kambarys: 'miegamasis', m2: 15 },
        { kambarys: 'svetaine', m2: 18 },
    ],

    kaina: 75500,
};

console.log(butas1.kambariai.length);

const butas2 = {

    numeris: 12,
    uzbaigtumas: 'neįrengtas',
    balkonas: true,
    kambariai: [
        { kambarys: 'virtuve', m2: 9 },
        { kambarys: 'miegamasis', m2: 12 },
        { kambarys: 'svetaine', m2: 20 },
        { kambarys: 'vaikų kambarys', m2: 14 },
    ],
    
    kaina: 92500,
};


if (butas1.kambariai.length > butas2.kambariai.length) {
    console.log(`
        Butas 1: ${butas1.kambariai.length} kambariai,
        Butas 2: ${butas2.kambariai.length} kambariai,

        Butas 1 turi daugiau kambarių`);

} else {
    console.log(`
        Butas 1: ${butas1.kambariai.length} kambariai,
        Butas 2: ${butas2.kambariai.length} kambariai,

        Butas 2 turi daugiau kambarių`);
}


//---------------------------------------------------------------------------------------------------------------
console.log('\nTask #3.2');

let buto1m2 = 0;
let buto2m2 = 0;

for (let i = 0; i < butas1.kambariai.length; i++) {
    buto1m2 += butas1.kambariai[i].m2;
    console.log(buto1m2);

}

console.log('\n');


for (let i = 0; i < butas2.kambariai.length; i++) {
    buto2m2 += butas2.kambariai[i].m2;
    console.log(buto2m2);
}

const buto1m2Kaina = butas1.kaina / buto1m2;
console.log(buto1m2Kaina);

const buto2m2Kaina = butas2.kaina / buto2m2;
console.log(buto2m2Kaina);

if (buto1m2Kaina > buto2m2Kaina) {
    console.log(`
        Buto nr.1 m2 kaina = ${buto1m2Kaina} 
        Buto nr.2 m2 kaina = ${buto2m2Kaina} 
        
        Buto nr.1 m2 kaina - DIDESNĖ`);
} else {
    console.log(`
        Buto nr.1 m2 kaina: ${buto1m2Kaina}
        Buto nr.2 m2 kaina: ${buto2m2Kaina}
        
        Buto nr.2 m2 kaina DIDESNĖ`);
}

















































































































