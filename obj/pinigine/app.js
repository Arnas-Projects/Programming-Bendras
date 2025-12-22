



console.log('Piniginė');



class Pinigine {

    // constructor(popKiekis = 0, metalKiekis = 0) {
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
        console.log('Pinigų kiekis piniginėje:', suma);
    }
}

const P1 = new Pinigine(100);
const P2 = new Pinigine();

console.log(P1);

P1.ideti(0.8);
P1.ideti(58);
P1.ideti(1);

P2.ideti(1.8);
P2.ideti(300);
P2.ideti(0.02);


P1.skaiciuoti();
P2.skaiciuoti();

console.log(P1);
console.log(P2);




