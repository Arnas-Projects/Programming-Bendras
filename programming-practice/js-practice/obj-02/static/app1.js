


console.log('Static');
console.log('\n');


class Kisene {

    static visosKisenes = [];

    // rand šitam pavyzdžiui nebūtinas, bet jei reiktų sekti tiksliai kažkokį daiktą, tada naudojamas
    static rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    static get viso() {
        let visoYra = 0;

        this.visosKisenes.forEach(kisene => {
            visoYra += kisene.#yra;
        });
        return visoYra;
    }


    #yra;

    constructor() {
        this.#yra = 0;
        this.constructor.visosKisenes.push(this); // įdedame VISĄ objektą

        // rand šitam pavyzdžiui nebūtinas, bet jei reiktų sekti tiksliai kažkokį daiktą, tada naudojamas
        this.id = this.constructor.rand(10000000, 99999999); // quasi id

    }


    prideti(kiekis) {
        this.#yra += kiekis; // this === šitas objektas
    }

    isimti(kiek) {
        this.#yra -= kiek;
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

console.log(`\n(STATIC) Viso yra: ${Kisene.viso}`);

console.log('\n');









