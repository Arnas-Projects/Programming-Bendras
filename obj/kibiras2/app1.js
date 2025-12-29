


console.log('Kibiras 2');

// ---------------------------------------------------------------------------------------------------------
// (STATIC) Klasėje Kibiras1 (pirmas uždavinys) 
// sukurti metodą akmenuSkaiciusVisuoseKibiruose(), 
// kuris rodytų bendrą visuose kibiruose pririnktų 
// akmenų kiekį (visuose sukurtuose Kibiras objektuose). 
// Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, 
// naudokite statinę savybę visiAkmenys (kurioje yra įrašytas 
// ir saugomas bendras akmenų skaičius). Taip pat atitinkamai 
// modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).


class Kibiras2 {

    static #visiAkmenys = 0;

    static kiekPririnktaAkmenuVisuoseKibiruose() {
        console.log('Visuose kibiruose pririnkta: ' + this.#visiAkmenys + ' akmenys');
    }

    static pridetiBendraiAkmenu(kiekis) {
        this.#visiAkmenys += kiekis;
    }

    constructor() {
        this.akmenuKiekis = 0;  // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;  // kiekis padidinamas vienetu
        // this.akmenuKiekis = this.akmenuKiekis + 1;
        this.constructor.pridetiBendraiAkmenu(1);
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;  // kiekis padidinamas kiekiu
        this.constructor.pridetiBendraiAkmenu(kiekis);
    }

    kiekPririnktaAkmenu() {
        console.log('Pririnkta akmenų:', this.akmenuKiekis);
    }

    kiekisAkmenuVisuoseKibiruose() {
        // console.log('Visuose kibiruose pririnkta: ' + this.constructor.#visiAkmenys + ' akmenys');
    }
}

const K1 = new Kibiras2();
const K2 = new Kibiras2();

console.log(K1);

K1.prideti1Akmeni();
K1.prideti1Akmeni();

K2.prideti1Akmeni();
K2.pridetiDaugAkmenu(8);
K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
K2.kiekPririnktaAkmenu();

Kibiras2.kiekPririnktaAkmenuVisuoseKibiruose();















