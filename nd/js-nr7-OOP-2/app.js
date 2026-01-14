


const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const randColor = _ => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


console.log('Objektiniai uždaviniai #2');
console.log('\n');



console.log('%c\n\n************ TASK 1 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), 
    kuris sukuria naują Marsas objektą, turintį dvi savybes 
    id: rand 100000 - 999999 ir pavadinimas: pagal taisyklę 
    iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”. 
    
    Metodas grąžina Marsas objektą. Metodą iškvietus trečią, 
    ketvirtą ir t.t. kartus, metodas turi nekurti daugiau naujų 
    Marsas objektų, o grąžinti atsitiktine tvarka, vieną iš dviejų 
    jau sukurtų Marsas objektų. 
    
    Tarkim penkis kartus iškvietus metodą, turime matyti tik du 
    skirtingus objektus (žiūrim pagal id).
*/


class Marsas {

    static palydovai = [];

    static pavadinimai = ['Deimos', 'Fobos'];


    static rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }


    static pridetiPalydova() {

        if (this.palydovai.length < 2) {

            const id = this.rand(100000, 999999);
            const pavadinimas = this.pavadinimai[this.palydovai.length];

            const naujasObj = new Marsas(id, pavadinimas);
            this.palydovai.push(naujasObj);

            return naujasObj;
        }

        const randIndex = this.rand(0, 1);
        return this.palydovai[randIndex];
    }

    constructor(id, name) {
        this.id = id;
        this.pavadinimas = name;
    }
};


console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());



console.log('%c\n\n************ TASK 2 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. 

    Sukurti statinį metodą gamintiPuodelius(), kuris pagamina du objektus 
    su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. 
    
    Sukurti statinį metodą perpilti(), kuris “pilną” puodelį padaro 
    tuščią ir atvirkščiai. 
    
    Jeigu abu puodeliai tušti arba pilni - nieko nepadaro. 
    
    Sukurti statinį metodus ispiltiViska(), kuris abu puodelius 
    padaro “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. 
    
    Po šių metodų iškvietimo, metodas perpilti() turi veikti 
    korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”).
*/


class Puodelis {

    static visiPuodeliai = [];

    constructor(spalva, ipilta) {
        this.spalva = spalva;
        this.ipilta = ipilta;
    }

    static gamintiPuodelius() {
        const puodelis1 = new Puodelis('raudonas', 'pilnas');
        const puodelis2 = new Puodelis('geltonas', 'tuščias');
        this.visiPuodeliai = [puodelis1, puodelis2];
        return this.visiPuodeliai;
    }

    static perpilti() {

        if (this.visiPuodeliai.length < 2)
            return;

        const p1 = this.visiPuodeliai[0];
        const p2 = this.visiPuodeliai[1];

        if (p1.ipilta != p2.ipilta) {

            if (p1.ipilta === 'pilnas') {
                p1.ipilta = 'tuščias';
                p2.ipilta = 'pilnas';
            } else {
                p1.ipilta = 'pilnas';
                p2.ipilta = 'tuščias';
            }
        }
    }

    static ispiltiViska() {

        if (this.visiPuodeliai.length < 2)
            return;

        const p1 = this.visiPuodeliai[0];
        const p2 = this.visiPuodeliai[1];

        p1.ipilta = 'tuščias';
        p2.ipilta = 'tuščias';
    }

    static ipiltiAbu() {

        if (this.visiPuodeliai.length < 2)
            return;

        const p1 = this.visiPuodeliai[0];
        const p2 = this.visiPuodeliai[1];

        p1.ipilta = 'pilnas';
        p2.ipilta = 'pilnas';
    }
};



console.log(Puodelis.gamintiPuodelius());

Puodelis.perpilti();
console.log(Puodelis.visiPuodeliai);

Puodelis.ispiltiViska();
console.log(Puodelis.visiPuodeliai);

Puodelis.ipiltiAbu();
console.log(Puodelis.visiPuodeliai);

Puodelis.perpilti();
console.log(Puodelis.visiPuodeliai);

Puodelis.ispiltiViska();
console.log(Puodelis.visiPuodeliai);

Puodelis.perpilti();
console.log(Puodelis.visiPuodeliai);



console.log('%c\n\n************ TASK 3 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Taskas, kuris turi savybę taskas rand 100-999. 
    
    Sukurti klasę Taskai, kuris turi savybe taskai, kuri yra masyvas 
    iš 10 Taskas objektų. 
    
    Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, 
    kuris yra masyvas iš 10 elementų, o kiekvienas elementas yra Taskai objektas. 
    
    Išrūšiuokite masyvą daugTasku, pagal taskų sumą nuo didžiausio iki mažiausio.
*/

// 1 etapas ----------------------------------------------------------------------------------------------
class Taskas {

    constructor() {
        this.taskas = rand(100, 999);
    }
};


// 2 etapas ----------------------------------------------------------------------------------------------
class Taskai {

    constructor() {

        this.taskai = [];

        for (let i = 0; i < 10; i++) {

            const naujasObj = new Taskas();
            this.taskai.push(naujasObj);
        }
    }
};

const dots1 = new Taskai();

console.log(dots1);
console.log('\n');


// 3 etapas ----------------------------------------------------------------------------------------------
const daugTasku = [];

for (let i = 0; i < 10; i++) {

    const naujasTaskaiObj = new Taskai();
    daugTasku.push(naujasTaskaiObj);
};

console.log(daugTasku, typeof daugTasku);
console.log('\n');


// 4 etapas ----------------------------------------------------------------------------------------------
const sortedDaugTasku = daugTasku.toSorted((a, b) => {

    const sumaA = a.taskai.reduce((suma, dabartinis) => suma + dabartinis.taskas, 0);
    const sumaB = b.taskai.reduce((suma, dabartinis) => suma + dabartinis.taskas, 0);

    return sumaB - sumaA;
});


// Alternatyva. ATKREIPTI DĖMESĮ Į {} SKLIAUSTUS IR Į 'RETURN'

const sortedDaugTasku2 = daugTasku.toSorted((a, b) => {

    const sumaA = a.taskai.reduce((suma, dabartinis) => {
        return suma + dabartinis.taskas;
    }, 0);

    const sumaB = b.taskai.reduce((suma, dabartinis) => {
        return suma + dabartinis.taskas;
    }, 0);

    return sumaB - sumaA;
});

console.log(sortedDaugTasku);
console.log('\n');



// 5 etapas ----------------------------------------------------------------------------------------------
sortedDaugTasku.forEach((obj, index) => {

    const suma = obj.taskai.reduce((s, t) => s + t.taskas, 0);
    console.log(`Eilė nr. ${index + 1}: Suma = ${suma}`);
});



console.log('\n\n\nMASYVAS 2');
console.log('\n');



sortedDaugTasku2.forEach((obj, index) => {

    const suma = obj.taskai.reduce((s, t) => s + t.taskas, 0);
    console.log(`Eilė nr. ${index + 1}: Suma = ${suma}`);
});



console.log('%c\n\n************ TASK 4 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Div. Sukūrus naują objektą iš šios klasės HTML’e 
    turi atsirasti naujas <div> tagas su rand 1000 - 9999 skaičiumi viduje. 
    
    Sukurti metodą spalva(color), kuris keistų to <div> tago spalvą. 
    
    Taip pat statinį metodą visuSpalva(color), kuris keistų visų <div> 
    tagų, sukurtų per klasę, spalvą.
*/


class Div {

    static visiDivai = [];

    static visuSpalva(color) {

        this.visiDivai.forEach(obj => {
            obj.spalva(color);
        });
    }

    constructor() {
        const bodyTag = document.querySelector('body');
        this.divTag = document.createElement('div');
        const text = rand(1000, 9999);
        this.divTag.innerText = text;
        bodyTag.appendChild(this.divTag);

        this.constructor.visiDivai.push(this);
    }

    spalva(color) {
        if (this) {
            this.divTag.style.color = color;
        }
        return;
    }
};


const div1 = new Div();
const div2 = new Div();
const div3 = new Div();
const div4 = new Div();


div1.spalva(randColor());
div2.spalva('crimson');
div3.spalva(randColor());
div4.spalva(randColor());

console.log(div1);

// Div.visuSpalva('green');






console.log('%c\n\n************ TASK 5 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Post. Kuriant objektą iš šios klasės, reikia 
    įrašyti id savybę, pasirinktinai nuo 1 iki 100. 
    
    Objektas turi turėti visas savybes gautas iš serverio 
    adresu: https://jsonplaceholder.typicode.com/posts/1 
    (objektas su id: 1).
*/



















console.log('%c\n\n************ TASK 6 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Ratai. Klasė turi dvi savybes: kiekis ir dydis. 
    
    Abi savybės įrašomos objekto kūrimo metu. 
    
    Sukurti klasę Dviratis ir klasę Automobilis. 
    
    Abi šios klasės turi turėti savybę gamintojas, 
    kuri įrašoma objekto kūrimo metu ir paveldėti klasę Ratai. 
    
    Sukurti objektus iš klasių Dviratis ir Automobilis 
    kūrimo metu nurodant gamintoją ir ratų dydį, o tuo tarpu 
    ratų skaičius turi būti priskirtas automatiškai priklausomai 
    nuo to, kiek ratų turi transporto priemonė.
*/


class Ratai {

    constructor(kiekis, dydis) {
        this.kiekis = kiekis;
        this.dydis = dydis;
    }
};

const wheels1 = new Ratai(100, 16);
console.log(wheels1);


// --------------------------------------------------------------------------

class Dviratis extends Ratai {

    constructor(dydis, brand) {
        super(2, dydis);
        this.gamintojas = brand;
    }
};

const bike1 = new Dviratis(14, 'Panther');
console.log(bike1);


// --------------------------------------------------------------------------

class Automobilis extends Ratai {

    constructor(dydis, brand) {
        super(4, dydis);
        this.gamintojas = brand;
    }
};

const car1 = new Automobilis(16, 'Mitsubishi');
console.log(car1);



// --------------------------------------------------------------------------------------------------------------------

// Alternatyva - half correct
// class Ratai {

//     constructor(kiekis, dydis) {
//         this.kiekis = kiekis;
//         this.dydis = dydis;
//     }
// };

// const wheels1 = new Ratai(4, 16);
// console.log(wheels1);


// // --------------------------------------------------------------------------

// class Dviratis extends Ratai {

//     constructor(kiekis, dydis, brand) {
//         super(kiekis, dydis);
//         this.gamintojas = brand;
//     }
// };

// const bike1 = new Dviratis(35, 14, 'Panther');
// console.log(bike1);


// // --------------------------------------------------------------------------

// class Automobilis extends Dviratis {

//     constructor(kiekis, dydis, brand) {
//         super(kiekis, dydis, brand);
//     }
// };

// const car1 = new Automobilis(4, 16, 'Mitsubishi');
// console.log(car1);





console.log('%c\n\n************ TASK 7 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Paukstis, kuris turi tris metodus bega(), 
    plaukia(), skrenda(). 
    
    Iškvietus atitinkamą metodą, konsolėje turi būti atspausdintas 
    atitinkamas pranešimas pvz.: “Šitas paukštis skrenda”, kai 
    iškviečiamas metodas skrenda(). 
    
    Sukurti tris klases Antis, Pingvinas ir Strutis, kurios paveldėja 
    klasę Paukštis. 
    
    Kiekvienoje klasėje perrašyti nekorektiškus metodus pvz.: “Šitas 
    paukštis NEskrenda”, kai iškviečiamas metodas skrenda() 
    objekte pagamintame iš klasės Strutis.
*/


class Paukstis {

    vardas() {
        return `Šis paukštis yra: ${this.constructor.name}`
    }

    bega() {
        console.log(`${this.vardas()} ir šis paukštis bėga.`);
    }


    plaukia() {
        console.log(`${this.vardas()} ir šis paukštis plaukia.`);
    }


    skrenda() {
        console.log(`${this.vardas()} ir šis paukštis skrenda.`);
    }
};

// ------------------------------------------------------------------------------------------------------------------------

class Antis extends Paukstis {


};

// ------------------------------------------------------------------------------------------------------------------------

class Pingvinas extends Paukstis {

    bega() {
        console.log(`${this.vardas()} ir šis paukštis nebėga.`);
    }

    skrenda() {
        console.log(`${this.vardas()} ir šis paukštis neskrenda.`);
    }
};

// ------------------------------------------------------------------------------------------------------------------------

class Strutis extends Paukstis {

    plaukia() {
        console.log(`${this.vardas()} ir šis paukštis neplaukia.`);
    }


    skrenda() {
        console.log(`${this.vardas()} ir šis paukštis neskrenda.`);
    }
};


const paukstukas = new Paukstis();

const anciukas = new Antis();
const pingvinukas = new Pingvinas();
const struciukas = new Strutis();


anciukas.bega();
anciukas.plaukia();
anciukas.skrenda();

console.log('\n');

pingvinukas.bega();
pingvinukas.plaukia();
pingvinukas.skrenda();

console.log('\n');

struciukas.bega();
struciukas.plaukia();
struciukas.skrenda();

console.log('\n');





console.log('%c\n\n************ TASK 8 ************%c', 'color: deeppink;', 'color: inherit;');
/*
    Sukurti klasę Senelis, kurią paveldi Klasė Tevas, 
    kurią atitinkamai paveldi klasė Vaikas. 
    
    Senelis turi savybę pavarde (Tevas ir Vaikas tokios 
    savybės neturi), kurią paveldi visos kitos klasės ir 
    kuri priskirama objekto kūrimo metu. 
    
    Visos klasės turi savybę vardas, kuri yra nepaveldima, 
    bet perrašoma kiekvienoje klasėje ir kuri įrašoma objekto 
    kūrimo metu. 
    
    Klasė Senelis turi metodą kas(), kurį paveldi visos klasės 
    ir kuris konsolėje atspausdina objekto vardą ir pavardę. 
    
    Sukurkite po vieną objektą iš visų klasių su ta pačia pavarde 
    ir skirtingais vardais. 
    
    Visuose objektuose paleiskite metodą kas() ir įsitikinkite, 
    kad visi turi teisingą vardus ir pavardę
*/


class Senelis {

    constructor(name, surname = 'Baranauskas') {
        this.pavarde = surname;
        this.vardas = name;
    }

    kas() {
        console.log(`Asmuo: ${this.constructor.name} | Vardas: ${this.vardas} | Pavardė: ${this.pavarde}`);
    }
};

// ------------------------------------------------------------------------------------------------------------------------

class Tevas extends Senelis {

    constructor(name) {
        super(name);
        // this.vardas = name;
    }
};

// ------------------------------------------------------------------------------------------------------------------------

class Vaikas extends Tevas {

    constructor(name) {
        super(name);
        // this.vardas = name;
    }
};

// ------------------------------------------------------------------------------------------------------------------------


const senis = new Senelis('Jonas');
const tetis = new Tevas('Giedrius');
const vaikis = new Vaikas('Tomas');


console.log(senis, tetis, vaikis);

console.log('\n');

senis.kas();
tetis.kas();
vaikis.kas();

console.log('\n\n\n');


// ------------------------------------------------------------------------------------------------------------------------

// // PROTINGOS SMEGENINĖS KODO PAVYZDYS

// // Pavyzdys skirtas atvejams, kai constructor() norime perduodi daug hardcodintų reikšmių kuriant naują objektą.

// class Senelis2 {
//     // We pass ONE object and set defaults inside the curly braces
//     constructor({ 
//         name, 
//         surname = 'Baranauskas', 
//         age = 20, 
//         profession = 'Kalvis', 
//         meritalStatus = 'Vedęs' 
//     } = {}) { 
//         this.vardas = name;
//         this.pavarde = surname;
//         this.amzius = age;
//         this.profesija = profession;
//         this.seimyninePadetis = meritalStatus;
//     }

//     kas() {
//         console.log(`Vardas: ${this.vardas} | Pavardė: ${this.pavarde} | Padėtis: ${this.seimyninePadetis}`);
//     }
// };

// // --------------------------------------------------------------------------------
// // Usage: You can skip any property you want!
// // --------------------------------------------------------------------------------

// // 1. Only name (everything else is default)
// const senis1 = new Senelis2({ name: 'Jonas' });

// // 2. Name and marital status ONLY (no 'undefined' needed!)
// const senis2 = new Senelis2({ 
//     name: 'Petras', 
//     meritalStatus: 'Išsituokęs' 
// });

// // 3. Changing just the profession
// const senis3 = new Senelis2({ 
//     name: 'Antanas', 
//     profession: 'Programuotojas' 
// });

// senis1.kas();
// senis2.kas();
// senis3.kas();











