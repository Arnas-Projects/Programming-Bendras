

// ---------------------------------------------------------------------------------------------------------
// Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę 
// akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, 
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą 
// ir rezultatų išvedimą.
console.log('%c\n\n************ Task 1 ************%c', 'color: deeppink;', 'color: inherit;');



class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }


    prideti1Akmeni() {
        this.akmenuKiekis++;
    }


    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis
    }


    kiekPririnktaAkmenu() {
        console.log(`Akmenų kiekis: ${this.akmenuKiekis}`)
    }
}

const kibirelis = new Kibiras1();

console.log(kibirelis);

kibirelis.prideti1Akmeni();
kibirelis.prideti1Akmeni();
console.log(kibirelis);

kibirelis.pridetiDaugAkmenu(5);
console.log(kibirelis);

kibirelis.kiekPririnktaAkmenu();

kibirelis.prideti1Akmeni();
kibirelis.prideti1Akmeni();

kibirelis.kiekPririnktaAkmenu();


// ---------------------------------------------------------------------------------------------------------
// Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes 
// popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), 
// kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda 
// prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į 
// konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės 
// objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros 
// ir metalinės monetos egzistuoja realiame pasaulyje.
console.log('%c\n\n************ Task 2 ************%c', 'color: deeppink;', 'color: inherit;');


class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }


    ideti(kiekis) {

        if (kiekis <= 2) {
            this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
        } else {
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
        }
    }


    skaiciuoti() {

        const suma = this.popieriniaiPinigai + this.metaliniaiPinigai;

        console.log(`Dabar piniginėje yra: ${suma} pinigų`);
    }
}

const PinigaiPinigineje = new Pinigine();

console.log(PinigaiPinigineje);

PinigaiPinigineje.ideti(3);
PinigaiPinigineje.ideti(1);
PinigaiPinigineje.ideti(2);

console.log(PinigaiPinigineje);

PinigaiPinigineje.skaiciuoti();




// ---------------------------------------------------------------------------------------------------------
// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę 
// keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: 
// ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę 
// išvestų troleibusu važiuojančių keleivių skaičių. 
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas 
// keleivių skaičius negali.
console.log('%c\n\n************ Task 3 ************%c', 'color: deeppink;', 'color: inherit;');


class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }


    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        console.log(`\nĮlipo keleivių: ${keleiviuSkaicius}`);
    }


    islipa(keleiviuSkaicius) {

        if (keleiviuSkaicius > this.keleiviuSkaicius) {
            this.keleiviuSkaicius = 0;
            console.log('\nKeleivių skaičius negali būti mažiau nei 0');
        } else {
            this.keleiviuSkaicius -= keleiviuSkaicius
            console.log(`\nIšlipo keleivių: ${keleiviuSkaicius}`);
        }
    }


    vaziuoja() {

        const KeleiviaiTroleibuse = this.keleiviuSkaicius;
        console.log(`\nKeleivių kiekis: ${KeleiviaiTroleibuse}`);
    }
}

const Trulikas1 = new Troleibusas();
console.log(Trulikas1);

Trulikas1.ilipa(5);
console.log(Trulikas1);

Trulikas1.islipa(3);
console.log(Trulikas1);

Trulikas1.islipa(3);
console.log(Trulikas1);

Trulikas1.vaziuoja();
console.log(Trulikas1);

Trulikas1.ilipa(4);
console.log(Trulikas1);

Trulikas1.vaziuoja();
console.log(Trulikas1);



// ---------------------------------------------------------------------------------------------------------
// (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
// kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
// Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
// bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų 
// keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas 
// bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus 
// ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
console.log('%c\n\n************ Task 4 (STATIC) ************%c', 'color: deeppink;', 'color: inherit;');















// ---------------------------------------------------------------------------------------------------------
// (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje 
// sukurti savybę turinys, kuri yra Map tipo objektas. 
// Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), 
// idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), 
// kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 
// Pridėti tuos pačius produktus galima po kelis kartus, tokiu 
// atveju produktų kiekis turėtų sumuotis.
console.log('%c\n\n************ Task 5 (MAP) ************%c', 'color: deeppink;', 'color: inherit;');















// ---------------------------------------------------------------------------------------------------------
// Patobulinti 2 uždavinio piniginę taip, kad būtų galima 
// skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. 
// Parašyti metodą monetos(), kuris skaičiuotų kiek yra 
// piniginėje monetų ir metoda banknotai() - popierinių 
// pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) 
// metodo kvietimą) laikykite vienu banknotu ar viena moneta.
console.log('%c\n\n************ Task 6 ************%c', 'color: deeppink;', 'color: inherit;');


class Pinigine2 {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetuKiekis = 0;
        this.banknotuKiekis = 0;
    }


    ideti(kiekis) {

        if (kiekis <= 2) {
            this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
            this.monetuKiekis++;
        } else {
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
            this.banknotuKiekis++;
        }
    }


    skaiciuoti() {
        const suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log(`Pinigų kiekis piniginėje: ${suma} `);
    }


    monetos() {
        const TotalCoins = this.monetuKiekis;
        console.log(`Monetų piniginėje: ${TotalCoins}`);
    }


    banknotai() {
        const TotalNotes = this.banknotuKiekis;
        console.log(`Banknotų piniginėje: ${TotalNotes}`);
    }
}

const P1 = new Pinigine2();

console.log(P1);

P1.ideti(2);
P1.ideti(2);

P1.skaiciuoti();

P1.ideti(10);
P1.ideti(3);
P1.ideti(2.5);

console.log(P1);

P1.banknotai();

console.log(P1);

P1.ideti(2);


console.log(P1);

P1.ideti(1);
console.log(P1);


// ---------------------------------------------------------------------------------------------------------
// (STATIC) Klasėje Kibiras1 (pirmas uždavinys) 
// sukurti metodą akmenuSkaiciusVisuoseKibiruose(), 
// kuris rodytų bendrą visuose kibiruose pririnktų 
// akmenų kiekį (visuose sukurtuose Kibiras objektuose). 
// Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, 
// naudokite statinę savybę visiAkmenys (kurioje yra įrašytas 
// ir saugomas bendras akmenų skaičius). Taip pat atitinkamai 
// modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).
console.log('%c\n\n************ Task 7 (STATIC) ************%c', 'color: deeppink;', 'color: inherit;');














// ---------------------------------------------------------------------------------------------------------
// Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. 
// Turis turi būti pasirenkamas objekto kūrimo metu. 

// Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
// Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis 
// netelpa ir būna lygus tūriui. 

// Parašyti metodą ispilti(), 
// kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas 
// kas netelpa, nuteka per stalo viršų.  

// Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų 
// kiek stiklinėje yra skysčio. 

// Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
// Didžiausią pripilti pilną ir tada ją ispilti į mažesnę 
// stiklinę, o mažesnę į dar mažesnę.
console.log('%c\n\n************ Task 8 ************%c', 'color: deeppink;', 'color: inherit;');


class Stikline {

    constructor(turis = 0) {
        this.turis = turis;
        this.kiekis = 0;
        // this.ipilti(kiekis);
    }


    ipilti(kiekis) {
        this.kiekis += kiekis;

        if (this.turis < this.kiekis) {
            this.kiekis = this.turis;
        }
    }


    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }


    stiklinejeYra() {
        const skystis = this.kiekis;
        console.log(`Stiklinėje yra: %c${skystis}%c ml skysčio`, 'color: greenyellow;', 'color: inherit;')
    }
}

const S1 = new Stikline(200);


S1.ipilti(200);

console.log(S1);

S1.stiklinejeYra();

const big = new Stikline(200);
const medium = new Stikline(150);
const small = new Stikline(100);

console.log(big);

big.ipilti(200);
console.log(big);

medium.ipilti(big.ispilti());

big.stiklinejeYra();

small.ipilti(medium.ispilti());

small.stiklinejeYra();


// ---------------------------------------------------------------------------------------------------------
// Sukurti klasę Grybas. Sukurti klasę Krepsys. 
// Krepsys, kuri turi savybę dydis,kuriai 
// konstruktoriuje yra priskiriama reikšmė 500 
// ir savybę prikrauta (kuri pradžioje lygi 0). 
// Grybas turi tris savybes, kurios taip pat yra 
// paskaičiuojamos konstruktoriuje: valgomas, 
// sukirmijes, svoris. Kuriant Grybo objektą jo 
// savybės turi būti atsitiktinai (rand funkcija) 
// priskiriamos taip: valgomas- true arba false, 
// sukirmijes- true arba false ir svoris- nuo 5 iki 45. 
// Eiti grybauti, t.y. Kurti naujus Grybas objektus, 
// jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, 
// t.y. Vykdyti deti(grybas) metodą kol bus pririnktas 
// pilnas krepšys nesukirmijusių ir valgomų grybų 
// (gali būti truputį daugiau nei dydis).
console.log('%c\n\n************ Task 9 ************%c', 'color: deeppink;', 'color: inherit;');


class Grybas {

    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);  // rand(0, 1) ===> 0 arba 1 ===> !0 ===> true arba !1 ===> false
        this.svoris = this.rand(5, 45);
    }



    rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

}


class Krepsys {

    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }


    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.dydis > this.prikrauta;  // true ===> dar yra vietos
    }
}

const krepsys = new Krepsys();


while(krepsys.deti(new Grybas())) {

}


console.log(krepsys);












