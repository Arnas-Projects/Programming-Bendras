


console.log('Kibiras 1');


// Saulėgrąžos kodas
class Kibiras1 {

    #akmenuKiekis;  // privatus

    constructor() {
        this.#akmenuKiekis = 0;  // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.#akmenuKiekis ++;  // kiekis padidinamas vienetu
    }

    prideduDaugAkmenu(kiekis) {
        this.#akmenuKiekis += kiekis;  // kiekis padidinamas kiekiu
    }

    kiekPririnktaAkmenu() {
        console.log('Pririnkta akmenų:', this.#akmenuKiekis);
    }

    //irgi getter'is tik neoficialus
    kiekPririnktaAkmenuSkaicius() {
        return this.#akmenuKiekis;
    }

    // getter'is su get
    get akmenuSkaicius() {
        return this.#akmenuKiekis;
    }
}


// Prano kodas

const K1 = new Kibiras1();
// const K2 = new Kibiras1();

console.log(K1);

K1.prideti1Akmeni();
K1.prideti1Akmeni();


// privačių # savybių negalima modifikuoti ar nuskaityti už klasės ribų
// K1.#akmenuKiekis = 5;

// console.log(K1.#akmenuKiekis);


// K2.prideti1Akmeni();
// K2.prideduDaugAkmenu(8);
// K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
// K2.kiekPririnktaAkmenu();

// const akmenysKibire = K1.kiekPririnktaAkmenuSkaicius();

const akmenysKibire = K1.akmenuSkaicius;  // savybė, kurios nėra, bet kurios reikšmę paskaičiuoja 'get'

console.log(akmenysKibire);




console.log('\n**********************');
// Sukurti klasę PiestukuDezute. Padaryti taip, kad į pieštukų dėžutę būtų galima pridėti pieštukų
// pvz ('red', 'blue', 'yellow' etc). Parašyti metodą, kuris atspausdina visus pieštukus

class PiestukuDezute {

    // pradinė reikšmė

    #pencilsInBox = [];
    // masyvas į kurį dėsime pieštukus

    addPencil(color) {
        this.#pencilsInBox.push(color);  // pridedam spalvą
    }

    printPencils() {
        // padaro stringą, sujungdamas visus masyvo elementus per ', '
        console.log('Pieštukai dėžutėje:', this.#pencilsInBox.join(", "));
    }
}

const P = new PiestukuDezute();

P.addPencil('red');
P.addPencil('blue');
P.addPencil('yellow');

P.printPencils();







