


console.log('Extending Classes');
console.log('\n');


// Klasę programuoja Giedrė

class Miskas1 {

    constructor(name, area) {
        this.pavadinimas = name;
        this.plotas = area;
    }

    bebras(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}


class Miskas2 {

    constructor(name, area) {
        this.pavadinimas = name;
        this.plotas = area; // plotas hektarais
    }

    briedis(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
};


const miskas1 = new Miskas1('Giraitė', 150);
miskas1.bebras('Bebras Petras');
 
const miskas2 = new Miskas2('Ąžuolynas', 200);
miskas2.briedis('Briedis Jonas');



