


console.log('OOP v2');
console.log('\n');


// Rašo Marytė
class Bebras {
    // instrukcija objekto gamybai

    // metodas (funkcija) kuri automatiškai pasileidžia objekto kūrimo (gaminimo) metu

    constructor(amzius) {
        console.log('KONSTRUOJAM');

        this.bebroMetai = amzius; // this === b1, kitą kartą this ===> b2, ir t.t.

        // this ===> kontekstinis žodis "tas" į dar neegzistuojantį objektą
    }

    kiekMetu() {
        console.log(`Bebro amžius: ${this.bebroMetai}`);
        // console.log('Bebro amžius:', this.bebroMetai);
    }
}


// Gaminame objektą pagal instrukciją

// Rašo Petriukas
const b1 = new Bebras(10);

// b1 yra objektas, pagamintas pagal Bebras klasės instrukcijas

console.log(b1);


const b2 = new Bebras(12);
const b3 = new Bebras(16);

b3.bebroMetai = 14;

console.log(b2, b3);

b2.kiekMetu();


// Sukurti 3 namų objektus iš klasės Namas. 
// Kiekvienas Namas turi turėti skirtingą, kambarių ir kaminų kiekį


class Namas {
    
    constructor(kambarys, kaminas) {
        this.kambariai = kambarys;
        this.kaminai = kaminas;
    }

    kambariuKaminuSandauga() {

        const sandauga = this.kambariai * this.kaminai;

        isNaN(sandauga) ? console.log('Kaminų ir kambarių sandauga:', 0) : 
        console.log('Kaminų ir kambarių sandauga:', sandauga);
    }
}

const N1 = new Namas(1, 2);
const N2 = new Namas(4, 6);
const N3 = new Namas(8, 10);

console.log(N1, N2, N3);


// Parašyti metodą kuris atspausdina kaminų ir kambarių sandaugą

N1.kambariuKaminuSandauga();
N2.kambariuKaminuSandauga();
N3.kambariuKaminuSandauga();





