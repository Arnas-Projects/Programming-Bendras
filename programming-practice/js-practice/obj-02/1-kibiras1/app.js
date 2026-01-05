


console.log('Kibiras 1');
console.log('\n');



class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0; // objekto savybės prasideda this.
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++; // kiekis padidinamas vienetu
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis; // kiekis padidinamas kiekiu -_-
    }

    kiekPririnktaAkmenu() {
        console.log(`Pririnktas akmenų kiekis: ${this.akmenuKiekis}`);
    }
};


const K1 = new Kibiras1();
const K2 = new Kibiras1();

K1.prideti1Akmeni();
K1.prideti1Akmeni();

K2.prideti1Akmeni();
K2.pridetiDaugAkmenu(8);
K2.prideti1Akmeni();

K1.kiekPririnktaAkmenu();
K2.kiekPririnktaAkmenu();








