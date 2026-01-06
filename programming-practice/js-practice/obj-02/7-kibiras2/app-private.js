




console.log('\n\n\n');
console.log('                          ***** PRIVATE *****');
console.log('Kibiras 3 - with Private');
console.log('\n');
// ------------------------------------------------------------------------------------------------------------------




class Kibiras3 {

    static #visiAkmeno = 0;

    // static (KLASĖS) metodas, skaičiuoja kiek akmenų yra VISUOSE kibiruose | Prisimenam 'static' metodai į objektą NENUEINA taigi į šitą metodą kreipiamės su KLASE
    static akmenoSkaiciusVisuoseKibiruose() {
        console.log(`(STATIC) Akmeno visuose kibiruose: ${this.#visiAkmeno}`);
    }

    static pridetiBendraiAkmeno(kiekis) {
        this.#visiAkmeno += kiekis;
    }

    constructor() {
        this.akmenuKiekis = 0; // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.akmenuKiekis++; // kiekis padidinamas vienetu
        this.constructor.pridetiBendraiAkmeno(1);
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis; // kiekis padidinamas kiekiu -_-
        this.constructor.pridetiBendraiAkmeno(kiekis);
    }

    kiekPririnktaAkmenu() {
        console.log(`Pririnktas akmenų kiekis: ${this.akmenuKiekis}`);
    }

    // kiekisAkmenoVisuoseKibiruose() {
    //     console.log(`Akmeno kiekis visuose kibiruose: ${this.constructor.#visiAkmeno}`);
    // }
};


const K3 = new Kibiras3();
const K4 = new Kibiras3();

K3.prideti1Akmeni();
K3.prideti1Akmeni();

K4.prideti1Akmeni();
K4.pridetiDaugAkmenu(8);
K4.prideti1Akmeni();

K3.kiekPririnktaAkmenu();
K4.kiekPririnktaAkmenu();

console.log('\n');

Kibiras3.akmenoSkaiciusVisuoseKibiruose();


console.log('\n');

// K3.kiekisAkmenoVisuoseKibiruose();
// K4.kiekisAkmenoVisuoseKibiruose();









