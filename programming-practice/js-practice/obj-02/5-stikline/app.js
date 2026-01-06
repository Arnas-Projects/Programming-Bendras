


console.log('Stiklinė');
console.log('\n');


class Stikline {

    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {

        // if (kiekis > this.turis) {
        //     this.kiekis = this.turis;
        // } else {
        //     this.kiekis += kiekis;
        // }

        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this; // grąžina stiklinę (šitą klasę "Stikline")
    }

    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }

    stiklinejeYra() {
        console.log(`Vandens kiekis stiklinėje: ${this.kiekis}`);
    }
};

const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);
console.log(s200, s150, s100);
console.log('\n');


s200.ipilti(500).ispilti(s150.ipilti(500).ispilti(s100.ipilti(500)));


s200.stiklinejeYra();
s150.stiklinejeYra();
s100.stiklinejeYra();



