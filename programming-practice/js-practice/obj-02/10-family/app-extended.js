

console.log('\n\n\n');
console.log('Extending Classes (EXTENDED)');
console.log('\n');


// Klasę programuoja Giedrė

// Klasė tėvas
class Miskas {

    constructor(name, area) {
        this.pavadinimas = name;
        this.plotas = area;
    }

    gyvena() {
        console.log(`${this.vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}


// Klasę programuoja Petras

// Klasė vaikas
class Zveris extends Miskas {

    constructor(pavadinimas, plotas) {

        // super() kviečia tėvinės klasės konstruktorių
        super(pavadinimas, plotas);
    }

    briedis(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }

    bebras(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}


const zveris1 = new Zveris('Giraitė', 150);
zveris1.bebras('Bebras Petras');

const zveris2 = new Zveris('Ąžuolynas', 200);
zveris2.briedis('Briedis Jonas');

console.log('\n');


class Bebras extends Miskas {

    constructor(title, area, name) {
        super(title, area);
        this.vardas = name;
    }

    // paveldi gyvena() iš Miskas klasės
}


class Briedis extends Miskas {

    constructor(pavadinimas, plotas, vardas) {
        super(pavadinimas, plotas);
        this.vardas = vardas;
    }

    // paveldi gyvena() iš Miskas klasės
}


const bebras = new Bebras('Giraitė', 150, 'Bebras Petras');
bebras.gyvena();

const briedis = new Briedis('Ąžuolynas', 200, 'Briedis Jonas');
briedis.gyvena();