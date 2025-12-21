

// ---------------------------------------------------------------------------------------------------------
// Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę 
// akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, 
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą 
// ir rezultatų išvedimą.
console.log('************ Task 1 ************');



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

console.log('\n\n************ Task 2 ************');


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


console.log('\n\n************ Task 3 ************');


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