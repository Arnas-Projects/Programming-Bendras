


console.log('Piniginė');
console.log('\n');



class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {

        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        const suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log(`Pinigų kiekis piniginėje: ${suma}`);
    }
};


const P1 = new Pinigine();
const P2 = new Pinigine();

P1.ideti(1);
P1.ideti(0.5);
P1.ideti(2);
P1.ideti(5);
P1.ideti(10);

P2.ideti(1.5);
P2.ideti(0.5);
P2.ideti(100);

P1.skaiciuoti();
P2.skaiciuoti();

console.log(P1, P2);

console.log('\n');



// KITAS VARIANTAS

class Pinigine2 {

    // constructor(popKiekis = 0, metalKiekis = 0) { // default nustatymai = 0;
    //     this.popieriniaiPinigai = popKiekis;
    //     this.metaliniaiPinigai = metalKiekis;
    // }

    constructor(kiekis = 0) {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.ideti(kiekis);
    }

    ideti(kiekis) {

        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        const suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log(`Pinigų kiekis piniginėje: ${suma}`);
    }
};


const P3 = new Pinigine2(100);
const P4 = new Pinigine2();

P3.ideti(1);
P3.ideti(0.5);
P3.ideti(2);
P3.ideti(5);
P3.ideti(10);

P4.ideti(1.5);
P4.ideti(0.5);
P4.ideti(100);

P3.skaiciuoti();
P4.skaiciuoti();

console.log(P3, P4);









