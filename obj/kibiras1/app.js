


console.log('Kibiras 1');


class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;  // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++;  // kiekis padidinamas vienetu
    }

    prideduDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;  // kiekis padidinamas kiekiu
    }

    kiekPririnktaAkmenu() {
        console.log('Pririnkta akmenų:', this.akmenuKiekis);
    }
}

const K1 = new Kibiras1();
const K2 = new Kibiras1();

console.log(K1);

K1.prideti1Akmeni();
K1.prideti1Akmeni();

K2.prideti1Akmeni();
K2.prideduDaugAkmenu(8);
K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
K2.kiekPririnktaAkmenu();


// console.log('\n********** Task 2 **********') // ----------------------------------------------------------------------------












