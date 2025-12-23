


console.log('STATIC');



class Kisene {

    static visosKisenes = [];

    // nebūtinas šitam pvz
    static rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    static get viso() {
        let visoYra = 0;

        this.visosKisenes.forEach(k => visoYra += k.yra);
        return visoYra;
    }

    constructor() {
        this.yra = 0;
        this.id = this.constructor.rand(1000000, 9999999)  // kvazi id
        this.constructor.visosKisenes.push(this);  // idedame VISĄ objektą
    }

    prideti(kiek) {
        this.yra += kiek  // this ===> šitas objektas
    }

    isimti(kiek) {
        // this.prideti(kiek * -1);
        this.yra -= kiek;
    }
}


const k1 = new Kisene();
const k2 = new Kisene();

k1.prideti(5);
k2.prideti(2);

k1.isimti(4)

const k3 = new Kisene();

k3.prideti(1);

console.log(k1, k2, k3);

// console.log('Viso yra:', k1.yra + k2.yra)

console.log('Viso yra:', Kisene.viso)


