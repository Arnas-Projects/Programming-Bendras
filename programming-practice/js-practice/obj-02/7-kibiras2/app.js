


console.log('Kibiras 2');
console.log('\n');



class Kibiras2 {

    static visiAkmeno = 0;

    // static (KLASĖS) metodas, skaičiuoja kiek akmenų yra VISUOSE kibiruose | Prisimenam 'static' metodai į objektą NENUEINA taigi į šitą metodą kreipiamės su KLASE
    static akmenoSkaiciusVisuoseKibiruose() {
        console.log(`(STATIC) Akmeno visuose kibiruose: ${this.visiAkmeno}`);
    }

    constructor() {
        this.akmenuKiekis = 0; // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.akmenuKiekis++; // kiekis padidinamas vienetu
        this.constructor.visiAkmeno++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis; // kiekis padidinamas kiekiu -_-
        this.constructor.visiAkmeno += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(`Pririnktas akmenų kiekis: ${this.akmenuKiekis}`);
    }

    // paprastas (OBJEKTO) metodas, skaičiuoja kiek akmenų yra VISUOSE kibiruose
    akmenoSkaiciusVisuoseKibiruose() {
        console.log(`Akmeno visuose kibiruose: ${this.constructor.visiAkmeno}`);
    }
};


const K1 = new Kibiras2();
const K2 = new Kibiras2();

K1.prideti1Akmeni();
K1.prideti1Akmeni();

K2.prideti1Akmeni();
K2.pridetiDaugAkmenu(8);
K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
K2.kiekPririnktaAkmenu();

console.log('\n');

Kibiras2.akmenoSkaiciusVisuoseKibiruose();


console.log('\n');


K1.akmenoSkaiciusVisuoseKibiruose();
K2.akmenoSkaiciusVisuoseKibiruose();








