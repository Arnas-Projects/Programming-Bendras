


console.log('Kibiras1 Private');
console.log('\n');


// Saulėgrąžos programavo
class Kibiras1 {

    #akmenuKiekis; // privatus

    constructor() {
        this.#akmenuKiekis = 0; // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.#akmenuKiekis ++; // kiekis padidinamas vienetu
    }

    pridetiDaugAkmenu(kiekis) {
        this.#akmenuKiekis += kiekis; // kiekis padidinamas kiekiu -_-
    }

    kiekPririnktaAkmenu() {
        console.log(`Pririnktas akmenų kiekis: ${this.#akmenuKiekis}`);
    }

    kiekPririnktaAkmenuSkaicius() {
        return this.#akmenuKiekis;
    }

    // getter
    get akmenuSkaicius() {
        return this.#akmenuKiekis;
    }
};


// Pranas programavo
const K1 = new Kibiras1();

K1.prideti1Akmeni();
K1.prideti1Akmeni();


// privačių negalima modifikuoti ar nuskaityti už klasės ribų
K1.akmenuKiekis = 5;

K1.kiekPririnktaAkmenu();


const akmenysKibire = K1.kiekPririnktaAkmenuSkaicius();

const akmenysKibireSuGet = K1.akmenuSkaicius; // savybė, kurios nėra, bet kurios reikšmę paskaičiuoja getteris

console.log(akmenysKibire, akmenysKibireSuGet);

console.log('\n');
console.log('\n');



class PiestukuDezute {

    #piestukuArray = []; // masyvas į kurį dėsime pieštukus

    pridetiPiestuka(spalva) {
        this.#piestukuArray.push(spalva); // pridedam spalvą
    }

    spausdintiPiestukus() {
        // padaro stringą, sujungdamas visus masyvo elementus per ', '
        console.log(`Pieštukai dėžutėje: ${this.#piestukuArray.join(' | ')}`);
    }
};


const P1 = new PiestukuDezute();

P1.pridetiPiestuka('red');
P1.pridetiPiestuka('blue');
P1.pridetiPiestuka('yellow');

P1.spausdintiPiestukus();






