


console.log('Static');
console.log('\n');


class Kisene {

    static viso = 0;

    static pridetiBendra(kiek) {
        this.viso += kiek; // jeigu this yra static kontekste, tai jis yra šita klasė
        // static kontekste mes NEGALIME kreiptis į 'this' objektą
    }

    #yra;

    constructor() {
        this.#yra = 0;
    }

    prideti(kiekis) {
        this.#yra += kiekis; // this === šitas objektas
        this.constructor.pridetiBendra(kiekis); // this.constructor === šita klasė
    }

    isimti(kiek) {
        this.#yra -= kiek;
        this.constructor.viso -= kiek;
    }

    get kiekYra() {
        return this.#yra;
    }
}


const k1 = new Kisene();
const k2 = new Kisene();

k1.prideti(5);
k2.prideti(2);

k1.isimti(4);

const k3 = new Kisene();
k3.prideti(3);


console.log(k1, k2, k3);

console.log(`(BE STATIC) Viso yra: ${k1.kiekYra + k2.kiekYra}`);

console.log(`(STATIC) Viso yra: ${Kisene.viso}`);







