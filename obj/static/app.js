


console.log('STATIC');



class Kisene {


    static viso = 0;

    static pridetiBendra(kiek) {
        this.viso += kiek;  // jeigu this yra statiniame kontekste tai jis yra šita klasė

        // statiniame kontekste mes NEGALIME kreiptis į šitas objektas
    }

    constructor() {
        this.yra = 0;
    }

    prideti(kiek) {
        this.yra += kiek  // this ===> šitas objektas
        this.constructor.viso += kiek;  // this.constructor === šita klasė
    }

    isimti(kiek) {
        // this.prideti(kiek * -1);
        this.yra -= kiek;
        this.constructor.viso -= kiek;
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


